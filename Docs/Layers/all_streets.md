

 all_streets 
=============



<img src='https://mapcomplete.osm.be/./assets/svg/pencil.svg' height="100px"> 

Layer to mark any street as cyclestreet






  - This layer is shown at zoomlevel **18** and higher




#### Themes using this layer 





  - [cyclestreets](https://mapcomplete.osm.be/cyclestreets)
  - [street_lighting](https://mapcomplete.osm.be/street_lighting)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential' target='_blank'>residential</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dtertiary' target='_blank'>tertiary</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dunclassified' target='_blank'>unclassified</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22highway%22%3D%22residential%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22highway%22%3D%22tertiary%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22highway%22%3D%22unclassified%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



**Warning** This quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/cyclestreet#values) [cyclestreet](https://wiki.openstreetmap.org/wiki/Key:cyclestreet) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:cyclestreet%3Dyes) [yes](https://wiki.openstreetmap.org/wiki/Tag:cyclestreet%3Dyes) [](https://wiki.openstreetmap.org/wiki/Tag:cyclestreet%3D) [](https://wiki.openstreetmap.org/wiki/Tag:cyclestreet%3D)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/cyclestreet:start_date#values) [cyclestreet:start_date](https://wiki.openstreetmap.org/wiki/Key:cyclestreet:start_date) | [date](../SpecialInputElements.md#date) | 




### images 



_This tagrendering has no question and is thus read-only_





### is_cyclestreet 



The question is **Is the street <b>{name}</b> a cyclestreet?**





  - **This street is a cyclestreet (and has a speed limit of 30 km/h)** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:cyclestreet' target='_blank'>cyclestreet</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:cyclestreet%3Dyes' target='_blank'>yes</a>&<a href='https://wiki.openstreetmap.org/wiki/Key:maxspeed' target='_blank'>maxspeed</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:maxspeed%3D30' target='_blank'>30</a>&<a href='https://wiki.openstreetmap.org/wiki/Key:overtaking:motor_vehicle' target='_blank'>overtaking:motor_vehicle</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:overtaking:motor_vehicle%3Dno' target='_blank'>no</a>
  - **This street is a cyclestreet** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:cyclestreet' target='_blank'>cyclestreet</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:cyclestreet%3Dyes' target='_blank'>yes</a>
  - **This street will become a cyclstreet soon** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:proposed:cyclestreet' target='_blank'>proposed:cyclestreet</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:proposed:cyclestreet%3Dyes' target='_blank'>yes</a>
  - **This street is not a cyclestreet** corresponds with 




### future_cyclestreet 



The question is **When will this street become a cyclestreet?**

This rendering asks information about the property  [cyclestreet:start_date](https://wiki.openstreetmap.org/wiki/Key:cyclestreet:start_date) 
This is rendered with `This street will become a cyclestreet at {cyclestreet:start_date}`

Only visible if `proposed:cyclestreet=yes` is shown



### questions 



_This tagrendering has no question and is thus read-only_





### minimap 



_This tagrendering has no question and is thus read-only_

 

This document is autogenerated from [assets/themes/cyclestreets/cyclestreets.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/themes/cyclestreets/cyclestreets.json)