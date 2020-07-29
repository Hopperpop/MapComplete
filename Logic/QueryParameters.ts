/**
 * Wraps the query parameters into UIEventSources
 */
import {UIEventSource} from "../UI/UIEventSource";

export class QueryParameters {

    private static order: string [] = ["layout","test","z","lat","lon"];
    private static knownSources = QueryParameters.init();
    private static defaults = {}
    
    private static addOrder(key){
        if(this.order.indexOf(key) < 0){
            this.order.push(key)
        }
    }

    private static init() {
        const knownSources = {}
        if(window === undefined){
            return;
        }
        if (window.location.search) {
            const params = window.location.search.substr(1).split("&");
            for (const param of params) {
                const kv = param.split("=");
                const key = kv[0];
                QueryParameters.addOrder(key)
                const v = kv[1];
                const source = new UIEventSource<string>(v);
                source.addCallback(() => QueryParameters.Serialize())
                knownSources[key] = source;
            }
        }
        return knownSources;
    }

    private static Serialize() {
        const parts = []
        for (const key of QueryParameters.order) {
            if (QueryParameters.knownSources[key] === undefined || QueryParameters.knownSources[key].data === undefined) {
                continue;
            }
            if (QueryParameters.knownSources[key].data == QueryParameters.defaults[key]) {
                continue;
            }
            parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(QueryParameters.knownSources[key].data))
        }
        history.replaceState(null, "", "?" + parts.join("&"));

    }

    public static GetQueryParameter(key: string, deflt: string): UIEventSource<string> {
        QueryParameters.defaults[key] = deflt;
        if (QueryParameters.knownSources[key] !== undefined) {
            return QueryParameters.knownSources[key];
        }
        QueryParameters.addOrder(key);
        const source = new UIEventSource<string>(deflt);
        QueryParameters.knownSources[key] = source;
        source.addCallback(() => QueryParameters.Serialize())
        return source;
    }

}