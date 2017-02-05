# MMM-RadioDe

[![License](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://raw.githubusercontent.com/SteffMUC/MMM-RadioDe/master/LICENSE)

This is an extension for the [MagicMirror](https://github.com/MichMich/MagicMirror). It can show/hide a webradio stream provided by [Radio.de](http://www.radio.de)
You can start and stop this web radio stream by hiding the module. It uses the suspend/ resume method of MagicMirror for this.
Currently the setup is rather simple. Potential extensions for the future might be selection of the radio station via remote control plugin, tuning of volume.
Currently I do use the module to start in the evening the favorite radio channel of my children and to stop it again once they do sleep.

![Magic-Mirror Module MMM-RadioDe screenshot](https://github.com/SteffMUC/MMM-RadioDe/blob/master/screenshot/MMM-RadioDe-Screenshot.png)


## Installation
1. Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/SteffMUC/MMM-RadioDe.git`. A new folder will appear navigate into it.
2. Execute `npm install` to install the node dependencies. (Currently not really necessary since there are no dependencies).

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-RadioDe',
		config: {
			// See 'Configuration options' for more information.
		}
	}
]
````

## Configuration options

The following properties can be configured:


<table width="100%">
	<!-- why, markdown... -->
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>station</code></td>
			<td>Station name of the desired radio station. Default (if nothing specified) is Antenne Bayern Hit for Kids. The station name can be obtained from [Radio.de](http://www.radio.de). Enter you desired radio station into the search field for radio stations, start it one time in the browser, you can derive the station name from the html address. E.g. Antenne Bayern Hits for Kids resolves to "antennekids"
		</tr>
		<tr>
			<td><code>api_key</code></td>
			<td>Must be specified. Without api_key the browser player will be displayed but will not start. The api_key can be derived one time in your browser, start any radio station of radio.de, click the embed button, you will see an embed code, copy your api_key from there.
			</td>
		</tr>
		<tr>
			<td><code>height</code></td>
			<td>Optional: Specify the height of your player. Default is 92 (pixel). Please specify only as decimal number without pixel as unit.
			</td>
		</tr>
		<tr>
			<td><code>width</code></td>
			<td>Optional: Specify the width of your player. Default is 360 (pixel). Please specify only as decimal number without pixel as unit.
			</td>
		</tr>
	</tbody>
</table>

## Dependencies
- Currently no dependencies

## Example Configuration
````javascript
{
	module: 'MMM-RadioDe',
	position: 'top_right', // This can be any of the regions.
	config: {
					// See 'Configuration options' for more information.
					station: "antenne",
					// can be obtained in embed section of station, e.g. http://antennekids.radio.de/
					api_key: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
					//optional,
					height:"92", // in pixel
					width:"360", // in pixel
	}
},
````

## LICENSE
- Please refer to LICENSE file.
