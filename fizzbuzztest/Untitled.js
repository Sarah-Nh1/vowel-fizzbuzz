console.log('type something')
process.stdin.once('data', (m)=>{

    console.log('you typed '+m);
   
})