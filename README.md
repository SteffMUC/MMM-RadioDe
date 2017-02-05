# MMM-RadioDe
This is an extension for the [MagicMirror](https://github.com/MichMich/MagicMirror). It can show/hide a webradio stream provided by [Radio.de](http://www.radio.de)
You can start and stop this web radio stream by hiding the module. It uses the suspend/ resume method of MagicMirror for this.
Currently the setup is rather simple. Potential extensions for the future might be selection of the radio station via remote control plugin, tuning of volume.
Currently I do use the module to start in the evening the favorite radio channel of my children and to stop it again once they do sleep.

![Magic-Mirror Module MMM-RadioDe screenshot](https://github.com/SteffMUC/MMM-RadioDe/blob/master/screenshot/MMM-RadioDe-Screenshot.jpg)


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
<code>
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
</code>

The MIT License (MIT)
=====================

Copyright � 2016 SteffMUC

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the �Software�), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

**The software is provided �as is�, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.**
