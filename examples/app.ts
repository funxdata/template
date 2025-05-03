// import  Handlebars  from "../src/types.ts";

declare const Handlebars: any;
// compile the template
const template = Handlebars.compile("Handlebars <b>{{doesWhat}}</b>");

// execute the compiled template and print the output to the console

const inner_html = template({ doesWhat: "rocks!" });


const App = document.querySelector("#app") as HTMLElement;
App.innerHTML = inner_html
 

const source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
             "{{kids.length}} kids:</p>" +
             "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
const template2 = Handlebars.compile(source);

const data = { "name": "Alan", "hometown": "Somewhere, TX",
             "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
const AppInfo = document.querySelector("#info") as HTMLElement;
AppInfo.innerHTML = template2(data)