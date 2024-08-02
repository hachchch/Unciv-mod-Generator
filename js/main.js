const n=document.querySelector("#buildingsGenerateLength");
const uniqueLengthMax=document.querySelector("#maxUniqueLength");
/*jQuerry*/
const buildings=document.querySelector("#buildings");
/*ユニークパラメーターに使う変数の設定*/
const statsFilter=["Food","Faith","Production","Culture","Gold","Happiness","Science"];
const civWideStatFilter=["Faith","Culture","Gold","Science"];
const cityFilter=["in this city","in all cities","in your cities","in all coastal cities","in capital","in all non-occupied cities","in all cities with a world wonder","in all cities connected to capital","in all cities with a garrison","in non-enemy foreign cities","in enemy cities","in foreign cities","in annexed cities","in puppeted cities","in cities being razed","in holy cities","in City-State cities","in cities following this religion","in cities following our religion","in all cities in which the majority religion is a major religion","in all cities in which the majority religion is an enhanced religion"];
var buildingFilter=[{name:"Palace"}];
function addBuildingFilter(name,tech){
    if(tech=="Agriculture"){
    buildingFilter.push({name:name});
        }else{
    buildingFilter.push({name:name,requiredTech:tech});
        }
}
function ra(array,int){
    if(!int){
        int=0;
        }
    if(array==buildingFilter){
        return "Building"+(Math.round(Math.random()*(int-1))+1);
        }else{
    return array[Math.round(Math.random()*(array.length-1))];
        }
}
/*uniquesのデータ*/
let buildingUniqueLists=[];
buildingUniqueLists[0]="\"Destroyed when the city is captured\"";
buildingUniqueLists[1]="\"[+\"+(Math.round(Math.random()*1)+1)+\" \"+ra(statsFilter)+\"] from [Lakes] tiles [\"+ra(cityFilter)+\"]\"";
buildingUniqueLists[2]="\"New [Military] units start with [\"+Math.round(Math.random()*30)+\"] Experience [\"+ra(cityFilter)+\"]\"";
buildingUniqueLists[3]="\"Must be next to [Coast]\"";
buildingUniqueLists[4]="\"[+\"+(Math.round(Math.random()*1)+1)+\" \"+ra(statsFilter)+\"] from [Cattle] tiles [\"+ra(cityFilter)+\"]\"";
buildingUniqueLists[5]="\"Only available <in cities with a [\"+ra(buildingFilter,eval(n.value))+\"]>\"";
buildingUniqueLists[6]="\"[+\"+(Math.round(Math.random()*1)+1)+\" \"+ra(statsFilter)+\"] from [Lakes] tiles [\"+ra(cityFilter)+\"]\"";
buildingUniqueLists[7]="\"Limited to [\"+(Math.round(Math.random()*10)+1)+\"] per Civilization\"";
buildingUniqueLists[8]="\"Requires at least [\"+(Math.round(Math.random()*20)+1)+\"] population\"";
buildingUniqueLists[9]="\"[\"+(Math.round(Math.random()*10)+1)+\"]% Food is carried over after population increases [\"+ra(cityFilter)+\"]\"";
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
techLists[21]="Theology";
techLists[22]="Civil Service";
techLists[23]="Guilds";
techLists[24]="Metal Casting";
techLists[25]="Compass";
techLists[26]="Education";
techLists[27]="Chivalry";
techLists[28]="Machinery";
techLists[29]="Physics";
techLists[30]="Steel";
techLists[31]="Astronomy";
techLists[32]="Acoustics";
techLists[33]="Banking";
techLists[34]="Printing Press";
techLists[35]="Gunpowder";
techLists[36]="Navigation";
techLists[37]="Architecture";
techLists[38]="Economics";
techLists[39]="Metallurgy";
techLists[40]="Chemistry";
techLists[41]="Archaeology";
techLists[42]="Scientific Theory";
techLists[43]="Industrialization";
techLists[44]="Rifling";
techLists[45]="Military Science";
techLists[46]="Fertilizer";
techLists[47]="Biology";
techLists[48]="Electricity";
techLists[49]="Steam Power";
techLists[50]="Dynamite";
techLists[51]="Refrigeration";
techLists[52]="Radio";
techLists[53]="Replaceable Parts";
techLists[54]="Flight";
techLists[55]="Railroads";
techLists[56]="Plastics";
techLists[57]="Electronics";
techLists[58]="Ballistics";
techLists[59]="Combustion";
techLists[60]="Pharmaceuticals";
techLists[61]="Atomic Theory";
techLists[62]="Radar";
techLists[63]="Combined Arms";
techLists[64]="Ecology";
techLists[65]="Nuclear Fission";
techLists[66]="Rocketry";
techLists[67]="Computers";
techLists[68]="Telecommunications";
techLists[69]="Mobile Tactics";
techLists[70]="Advanced Ballistics";
techLists[71]="Satellites";
techLists[72]="Robotics";
techLists[73]="Lasers";
techLists[74]="Globalization";
techLists[75]="Particle Physics";
techLists[76]="Nuclear Fusion";
techLists[77]="Nanotechnology";
techLists[78]="Stealth";
techLists[79]="Future Tech";
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
    buildingFilter=[{name:"Palace"}];/*buildingFilterのリセット*/
    buildings.value="/*Buildings.json*/\n[";
    for(let i=1; i<=n.value; ++i){
        /*uniqueの生成*/
    let uniqueLength=Math.round(Math.random()*uniqueLengthMax.value);
        let uniquesGenerated="";
        for(let i=0; i<uniqueLength;++i){
    uniquesGenerated+="\""+eval(buildingUniqueLists[Math.round(Math.random()*(buildingUniqueLists.length-1))])+"\"";
            if(i+1<uniqueLength){
                uniquesGenerated+=",";
                }
        }
        buildingRequiredTechs="";
        let techsRequired="";
        if(techLists.length>0){
            techsRequired=techLists[Math.round(Math.random()*(techLists.length-1))];
    buildingRequiredTechs="\"requiredTech\": \""+techsRequired+"\",\n";
            }else{
            techsRequired="Agriculture";
            buildingRequiredTechs="\"requiredTech\": \"Agriculture\",\n";
            }
    let buildingCost="";
    if(!buildingRequiredTechs || buildingRequiredTechs=="\"requiredTech\": \"Agriculture\",\n"){
    buildingCost="\"cost\": "+Math.ceil((Math.random()*n.value+1000)/(n.value-i+1))+",\n";
        buildingRequiredTechs="";
        }
        /*何を生産する施設かもランダム*/
        let statTypeByNumber=Math.round(Math.random()*6);
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
        }else if(statTypeByNumber==6){
        buildingStats="\"science\": "+Math.ceil(Math.random()*(Math.random()*4))+",\n";
        }
        let buildingPercentStatBonus="";
        if(Math.random()*100<20){
        if(statTypeByNumber==0){
        buildingPercentStatBonus="\"percentStatBonus\": {\"production\": "+Math.ceil(Math.random()*(Math.random()*33))+"},\n";
        }else if(statTypeByNumber==1){
        buildingPercentStatBonus="\"percentStatBonus\": {\"food\": "+Math.ceil(Math.random()*(Math.random()*33))+"},\n";
        }else if(statTypeByNumber==2){
        buildingPercentStatBonus="\"percentStatBonus\": {\"faith\": "+Math.ceil(Math.random()*(Math.random()*33))+"},\n";
        }else if(statTypeByNumber==3){
        buildingPercentStatBonus="\"percentStatBonus\": {\"gold\": "+Math.ceil(Math.random()*(Math.random()*33))+"},\n";
        }else if(statTypeByNumber==4){
        buildingPercentStatBonus="\"percentStatBonus\": {\"culture\": "+Math.ceil(Math.random()*(Math.random()*33))+"},\n";
        }else if(statTypeByNumber==5){
        buildingPercentStatBonus="\"percentStatBonus\": {\"happiness\": "+Math.ceil(Math.random()*(Math.random()*33))+"},\n";
        }else if(statTypeByNumber==6){
        buildingPercentStatBonus="\"percentStatBonus\": {\"science\": "+Math.ceil(Math.random()*(Math.random()*33))+"},\n";
        }
        }
        let buildingsGenerated="";
        if(uniquesGenerated!=""){
    buildingsGenerated="\
        {\n\
                \"name\": \"Building"+i+"\",\n\
                "+buildingStats+"\
                "+buildingPercentStatBonus+"\
\"hurryCostModifier\": "+Math.round(Math.random()*70+1)+",\n\
                "+buildingCost+"\
"+buildingRequiredTechs+"\
\"uniques\": ["+uniquesGenerated+"],\n\
                \"maintenance\": "+Math.round(Math.random()*2+1)+"\n\
        }";
            }else{
    buildingsGenerated="\
        {\n\
                \"name\": \"Building"+i+"\",\n\
                "+buildingStats+"\
                "+buildingPercentStatBonus+"\
\"hurryCostModifier\": "+Math.round(Math.random()*70+1)+",\n\
                "+buildingCost+"\
"+buildingRequiredTechs+"\
                \"maintenance\": "+Math.round(Math.random()*2+1)+"\n\
        }";
            }
        if(i+1<=n.value){
            buildingsGenerated+=",";
            }
    buildings.value+="\n"+buildingsGenerated;
    addBuildingFilter("Building"+i,techsRequired);
    }
    buildings.value+="\n]";
}
}
function rename(a,b){
    buildings.value=buildings.value.replaceAll(a,b);
}
function copyToClipBoard(string,button){
  navigator.clipboard.writeText(string).then(()=>{
      button.value="copy succeeded";
        setTimeout(function(){button.value="copyToClipBoard"}, 1000);
    },()=>{
      button.value="copy failed";
        setTimeout(function(){button.value="copyToClipBoard"}, 1000);
      });
}
