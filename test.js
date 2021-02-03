
var Kuroshiro = require("kuroshiro");
var KuromojiAnalyzer = require("kuroshiro-analyzer-kuromoji")



const run = async()=> {
  const kuroshiro = new Kuroshiro();
  const x = new KuromojiAnalyzer()
  const q = await kuroshiro.init(x);
  console.log('kkk', kuroshiro)
  console.log('xxx', x)
  console.log('q', q)
  
  const result = await kuroshiro.convert("感じ取れたら手を繋ごう、重なるのは人生のライン and レミリア最高！", 
  { to: "hiragana" });
  console.log('res', result)
  // result.then((res)=> {
  //   console.log('res', res)
  // }).catch((e)=> {
  //   console.log('err', e)
  // })
}

run()
