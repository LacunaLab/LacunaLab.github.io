import fs from 'fs'
import path from 'path'

const app = async e => {

	const types = ['otf', 'ttf']
	const res = (await fs.readdirSync('./fonts')).filter( f => f.indexOf('otf') != -1 || f.indexOf('ttf') != -1 )

	let out = {}
	let css = ''

	for( let i = 0; i < res.length; i ++) {
		const file = res[i]
		const name = file.split('_')[0]
		const num = (file.split('_')[1] || '1.ttf').split('.')[0]
		const type = (file.split('_')[1] || '1.ttf').split('.')[1]


		if (!out[name]) out[name] = []
		out[name].push(type)
	}

	let idx = 1
	for (const [name, list] of Object.entries(out)) {
		for (let i = 0; i < list.length; i++) {
			const id = `${name}_${i+1}`
			const type = list[i]
			const rule = `
/*=====================================
[${idx}-${i+1}] ${id}
=====================================*/

@font-face {
	font-family: '${id}';
	src: url('/fonts/${id}.${type}');
}
.font-${idx}-${i+1} {
	font-family: ${id}!important;
	font-weight: normal, bold, light;
	font-style: italic, oblique, normal;
}
			`

			css += rule
			console.log(idx, i, id)

		}
		idx += 1
	}

	const written = await fs.writeFileSync( './fonts.css', css )
}

app()