const n=document.querySelector("#buildingsGenerateLength");
/*jQuerry*/
const buildings=document.querySelector("#buildings");
/*uniquesのデータ*/
let buildingUniqueLists=[];
buildingUniqueLists[0]="Destroyed when the city is captured";
buildingUniqueLists[1]="[+1 Food] from [Lakes] tiles [in this city]";
buildingUniqueLists[2]="New [Military] units start with [15] Experience [in this city]";
buildingUniqueLists[3]="Must be next to [Coast]";
buildingUniqueLists[4]="[+1 Production] from [Cattle] tiles [in this city]";
buildingUniqueLists[5]="Only available <in cities with a [Building3]>";//生成中に変更できるようにしたい。
buildingUniqueLists[6]="[+1 Food] from [Lakes] tiles [in this city]";
/*Techsのデータ*/
let techLists=[];
/*baseRuleSetを使用する場合*/
var isToggled=0;
function useGaK(){
    isToggled++;
if(isToggled%2==1){
techLists[0]="Agriculture";
techLists[1]="Sailing";
techLists[2]="Pottery";
techLists[3]="Writing";
techLists[4]="Mining";
techLists[5]="Animal Husbandry";
techLists[6]="Archery";
techLists[7]="Trapping";
techLists[8]="Calendar";
techLists[9]="The Wheel";
techLists[10]="Masonry";
techLists[11]="Bronze Working";
techLists[12]="Optics";
techLists[13]="Horseback Riding";
techLists[14]="Mathematics";
techLists[15]="Construction";
techLists[16]="Philosophy";
techLists[17]="Drama and Poetry";
techLists[18]="Currency";
techLists[19]="Engineering";
techLists[20]="Iron Working";
}else{
        for(let i=0; i<techLists.length; ++i){
            techLists[i]="Agriculture";
            }
        }
    }
/*jsonの生成*/
function generate(type){
if(type=="buildings"){
    /*Buildings.jsonの生成*/
    buildings.value="/*Buildings.json*/\n[";
    for(let i=1; i<=n.value; ++i){
    let uniquesGenerated=buildingUniqueLists[Math.round(Math.random()*(buildingUniqueLists.length-1))];
        buildingRequiredTechs="";
        if(techLists.length>0){
    buildingRequiredTechs="\"requiredTech\": \""+techLists[Math.round(Math.random()*(techLists.length-1))]+"\",\n";
            }else{
            buildingRequiredTechs="\"requiredTech\": \"Agriculture\",\n";
            }
    let buildingCost="";
    if(!buildingRequiredTechs || buildingRequiredTechs=="\"requiredTech\": \"Agriculture\",\n"){
    buildingCost="\"cost\": "+Math.ceil((Math.random()*n.value+1000)/(n.value-i+1))+",\n";
        buildingRequiredTechs="";
        }
        /*何を生産する施設かもランダム*/
        let statTypeByNumber=Math.round(Math.random()*5);
        let buildingStats="";
    if(statTypeByNumber==0){
    buildingStats="\"production\": "+Math.ceil(Math.random()*(Math.random()*3))+",\n";
        }else if(statTypeByNumber==1){
        buildingStats="\"food\": "+Math.ceil(Math.random()*(Math.random()*4))+",\n";
        }else if(statTypeByNumber==2){
        buildingStats="\"faith\": "+Math.ceil(Math.random()*(Math.random()*3))+",\n";
        }else if(statTypeByNumber==3){
        buildingStats="\"gold\": "+Math.ceil(Math.random()*(Math.random()*3))+",\n";
        }else if(statTypeByNumber==4){
        buildingStats="\"culture\": "+Math.ceil(Math.random()*(Math.random()*3))+",\n";
        }else if(statTypeByNumber==5){
        buildingStats="\"happiness\": "+Math.ceil(Math.random()*(Math.random()*2))+",\n";
        }
    let buildingsGenerated="\
        {\n\
        \"name\": \"Building"+i+"\",\n\
        "+buildingStats+"\
        "+buildingCost+"\
        "+buildingRequiredTechs+"\
        \"uniques\": [\""+uniquesGenerated+"\"]\n\
        }";
        if(i+1<=n.value){
            buildingsGenerated+=","
            }
    buildings.value+="\n"+buildingsGenerated;
    }
    buildings.value+="\n]";
}
}
function rename(a,b){
    buildings.value=buildings.value.replaceAll(a,b);
}
