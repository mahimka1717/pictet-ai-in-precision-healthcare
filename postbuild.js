`use strict`;

const path = require(`path`);
const fs = require(`fs`);
const rimraf = require('rimraf');
const {name, domain} = require(`./package.json`);
const imgPattern = `./img/_optimized/`

const fontsDir = path.join(__dirname, 'out', '_next', 'static', 'media');
const destDir = path.join(__dirname, 'out', 'fonts');




function remove(path){
	try {
		fs.unlinkSync(path)
	} catch(err) {
		console.error(err)
	}
}

function getHtml(file){
	const src = path.resolve(file);	
	let template = fs.readFileSync(src, `utf8`);
	const start = template.indexOf(`<article`);
	const end = template.indexOf(`</article>`);
	return template.substr(start, end-start+10).replaceAll(imgPattern, domain+`/`+name+`/`+imgPattern.substring(2));
}

function replace(file, rules, newfile=null ) {
	const src = path.resolve(file);
	let template = fs.readFileSync(src, `utf8`);
	template = rules.reduce(
		(template, rule) => template.replaceAll(
			rule.search, (typeof rule.replace === `string` ? rule.replace : rule.replace.bind(global))
		),
		template
	);
	fs.writeFileSync(newfile?path.resolve(newfile):src, template);
}

replace(`out/_next/static/chunks/pages/index.css`,
	[{
		search: `/_next/static/media/`,
		replace: domain+`/`+name+'/fonts/'
	}],
	`out/index.css`,
)

replace(`out/embed.js`, 
	[{
	  search: `@name`,
	  replace: name
	},
	{
		search: `@domain`,
		replace: domain
	},
	{
		search: `@html`,
		replace: getHtml(`out/index.html`)
	}]
)

remove(`out/index.html`);

replace(`out/embed.html`, 
	[{
	  search: `@name`,
	  replace: name
	},
	{
		search: `@domain`,
		replace: domain
	}],
	`out/index.html`,
);

replace(`out/ft.html`, 
	[{
	  search: `@name`,
	  replace: name
	},
	{
		search: `@domain`,
		replace: domain
	}],
	`out/ft.html`,
);

remove(`out/embed.html`);
remove(`out/404.html`);
remove(`out/.DS_Store`);

// Создаем папку для файлов шрифтов, если ее нет
if (!fs.existsSync(destDir)) {
	fs.mkdirSync(destDir);
}

// Копируем файлы шрифтов в папку fonts
fs.readdir(fontsDir, (err, files) => {
	if (err) throw err;
	files.forEach((file) => {
	  const filePath = path.join(fontsDir, file);
	  fs.copyFileSync(filePath, path.join(destDir, file));
	});
  });
  
  // Удаляем папку _next из папки out
  rimraf(path.join(__dirname, 'out', '_next'), (err) => {
	if (err) throw err;
	console.log('Папка _next удалена из папки out.');
  });