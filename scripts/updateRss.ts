import fs from "fs";

import Parser from "rss-parser";

type CustomFeed = {};
type CustomItem = {
	itunes: { image: string };
};

const outputFile = "./src/feed.json";

async function main() {
	const rss = "https://rss.flightcast.com/pmgqiszts7kfhopzaq8el6yw.xml";

	const parser: Parser<CustomFeed, CustomItem> = new Parser({});
	const feed = await parser.parseURL(rss);

	fs.writeFileSync(outputFile, JSON.stringify(feed, null, 2));
}

//@ts-ignore: it's ok to await
const _ = await main();
