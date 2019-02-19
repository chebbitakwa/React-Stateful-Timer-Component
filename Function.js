function convert(x){
    
            let heur = (Math.floor(x/3600)).toString();
           
            let minute=(Math.floor((x % 3600)/60)).toString();
            
            let second =((x % 3600)%60).toString();
            
return{
    heur, minute, second
    }
}
export default convert