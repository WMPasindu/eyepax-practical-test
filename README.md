# Practice Test
Practice is an Integrated with News API.


## Starting point
The Project has ```app.js``` as Entry Point.
* if you have a problem to retrieve data please change newsapi - API key. To change, you must replace the ```config.js``` file APIKEY value to generated APIKEY from newsapi.

use this link for video demo :: https://drive.google.com/drive/folders/1Yi6lNyKB5ycijoKlhPJ-ocVHWzTflXmR?usp=sharing


## Android release steps
Generate APK - first use yarn or npm install -> cd android && ./gradlew assembleRelease


## iOS release steps

Set iOS deployment target

Follow below steps
* cd ios - and
* pod install to update the pods.
* open runner.xcworkspace from ids folder

The following commands will generate the runner.app file
* ```clean```
* ```build ios --release```
* Now open the ```xcode run/build``` to check if project has error

Select Product -> Archive
Follow the uploading steps

~~ or
 you can use `npx react-native run-ios --configuration Release` to generate release from terminal.

## Developed for
<p>
    Eyepax practice test ---- <br/>
    Pasindu Weerakoon<br/>
    Eyepax -> Practice test.
</p>
