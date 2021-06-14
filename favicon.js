import fs from 'fs'
import pngToIco from 'png-to-ico'

for (let i = 0; i < 2; i++) {
	const color = ['dark', 'light'][i]
	pngToIco([`./static/favicon-${color}.png`])
	  .then(buf => {
	    fs.writeFileSync(`./static/favicon-${color}.ico`, buf);
	  })
	  .catch(console.error);
}
