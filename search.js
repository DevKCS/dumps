
document.addEventListener("DOMContentLoaded", function() {
      var realContents = document.querySelector("#real_contents");

      // MutationObserver 생성
      var observer = new MutationObserver(function(mutationsList) {
        for (var mutation of mutationsList) {
          if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
            // #real_contents가 추가되었을 때 실행될 코드
            // 여기에 실행하고자 하는 코드 작성
            search();
            $("#selSigunguArea").append("<option id=selSigunguArea" + " value=" + "" + ">" + "지역을 선택해주세요" + "</option>");
            //	fnSetData(1);
          
            areaList();
            createSelectAreaList();
            $("#sidoAreaCd").on('change', function () {
              createSelectSggList($("#sidoAreaCd").val());
            });
            // 옵저버 해제 (필요한 경우)
            observer.disconnect();
          }
        }
      });

      // 옵저버 설정 및 시작
      observer.observe(document.body, { childList: true, subtree: true });
});

const areaList = () => {
  let areaList = JSON.parse('[{"sidonm":"서울특별시","sigunguareacd":"11010","sigungunm":"종로구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11020","sigungunm":"중구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11030","sigungunm":"용산구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11040","sigungunm":"성동구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11050","sigungunm":"광진구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11060","sigungunm":"동대문구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11070","sigungunm":"중랑구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11080","sigungunm":"성북구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11090","sigungunm":"강북구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11100","sigungunm":"도봉구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11110","sigungunm":"노원구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11120","sigungunm":"은평구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11130","sigungunm":"서대문구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11140","sigungunm":"마포구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11150","sigungunm":"양천구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11160","sigungunm":"강서구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11170","sigungunm":"구로구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11180","sigungunm":"금천구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11190","sigungunm":"영등포구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11200","sigungunm":"동작구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11210","sigungunm":"관악구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11220","sigungunm":"서초구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11230","sigungunm":"강남구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11240","sigungunm":"송파구","sidoareacd":"11"},{"sidonm":"서울특별시","sigunguareacd":"11250","sigungunm":"강동구","sidoareacd":"11"},{"sidonm":"부산광역시","sigunguareacd":"21010","sigungunm":"중구","sidoareacd":"21"},{"sidonm":"부산광역시","sigunguareacd":"21020","sigungunm":"서구","sidoareacd":"21"},{"sidonm":"부산광역시","sigunguareacd":"21030","sigungunm":"동구","sidoareacd":"21"},{"sidonm":"부산광역시","sigunguareacd":"21040","sigungunm":"영도구","sidoareacd":"21"},{"sidonm":"부산광역시","sigunguareacd":"21050","sigungunm":"부산진구","sidoareacd":"21"},{"sidonm":"부산광역시","sigunguareacd":"21060","sigungunm":"동래구","sidoareacd":"21"},{"sidonm":"부산광역시","sigunguareacd":"21070","sigungunm":"남구","sidoareacd":"21"},{"sidonm":"부산광역시","sigunguareacd":"21080","sigungunm":"북구","sidoareacd":"21"},{"sidonm":"부산광역시","sigunguareacd":"21090","sigungunm":"해운대구","sidoareacd":"21"},{"sidonm":"부산광역시","sigunguareacd":"21100","sigungunm":"사하구","sidoareacd":"21"},{"sidonm":"부산광역시","sigunguareacd":"21110","sigungunm":"금정구","sidoareacd":"21"},{"sidonm":"부산광역시","sigunguareacd":"21120","sigungunm":"강서구","sidoareacd":"21"},{"sidonm":"부산광역시","sigunguareacd":"21130","sigungunm":"연제구","sidoareacd":"21"},{"sidonm":"부산광역시","sigunguareacd":"21140","sigungunm":"수영구","sidoareacd":"21"},{"sidonm":"부산광역시","sigunguareacd":"21150","sigungunm":"사상구","sidoareacd":"21"},{"sidonm":"부산광역시","sigunguareacd":"21310","sigungunm":"기장군","sidoareacd":"21"},{"sidonm":"울산광역시","sigunguareacd":"26010","sigungunm":"중구","sidoareacd":"26"},{"sidonm":"울산광역시","sigunguareacd":"26020","sigungunm":"남구","sidoareacd":"26"},{"sidonm":"울산광역시","sigunguareacd":"26030","sigungunm":"동구","sidoareacd":"26"},{"sidonm":"울산광역시","sigunguareacd":"26040","sigungunm":"북구","sidoareacd":"26"},{"sidonm":"울산광역시","sigunguareacd":"26310","sigungunm":"울주군","sidoareacd":"26"},{"sidonm":"대구광역시","sigunguareacd":"22010","sigungunm":"중구","sidoareacd":"22"},{"sidonm":"대구광역시","sigunguareacd":"22020","sigungunm":"동구","sidoareacd":"22"},{"sidonm":"대구광역시","sigunguareacd":"22030","sigungunm":"서구","sidoareacd":"22"},{"sidonm":"대구광역시","sigunguareacd":"22040","sigungunm":"남구","sidoareacd":"22"},{"sidonm":"대구광역시","sigunguareacd":"22050","sigungunm":"북구","sidoareacd":"22"},{"sidonm":"대구광역시","sigunguareacd":"22060","sigungunm":"수성구","sidoareacd":"22"},{"sidonm":"대구광역시","sigunguareacd":"22070","sigungunm":"달서구","sidoareacd":"22"},{"sidonm":"대구광역시","sigunguareacd":"22310","sigungunm":"달성군","sidoareacd":"22"},{"sidonm":"경상북도","sigunguareacd":"37010","sigungunm":"포항시","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37020","sigungunm":"경주시","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37030","sigungunm":"김천시","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37040","sigungunm":"안동시","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37050","sigungunm":"구미시","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37060","sigungunm":"영주시","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37070","sigungunm":"영천시","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37080","sigungunm":"상주시","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37090","sigungunm":"문경시","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37100","sigungunm":"경산시","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37310","sigungunm":"군위군","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37320","sigungunm":"의성군","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37330","sigungunm":"청송군","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37340","sigungunm":"영양군","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37350","sigungunm":"영덕군","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37360","sigungunm":"청도군","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37370","sigungunm":"고령군","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37380","sigungunm":"성주군","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37390","sigungunm":"칠곡군","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37400","sigungunm":"예천군","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37410","sigungunm":"봉화군","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37420","sigungunm":"울진군","sidoareacd":"37"},{"sidonm":"경상북도","sigunguareacd":"37430","sigungunm":"울릉군","sidoareacd":"37"},{"sidonm":"광주광역시","sigunguareacd":"24010","sigungunm":"동구","sidoareacd":"24"},{"sidonm":"광주광역시","sigunguareacd":"24020","sigungunm":"서구","sidoareacd":"24"},{"sidonm":"광주광역시","sigunguareacd":"24030","sigungunm":"남구","sidoareacd":"24"},{"sidonm":"광주광역시","sigunguareacd":"24040","sigungunm":"북구","sidoareacd":"24"},{"sidonm":"광주광역시","sigunguareacd":"24050","sigungunm":"광산구","sidoareacd":"24"},{"sidonm":"전라남도","sigunguareacd":"36010","sigungunm":"목포시","sidoareacd":"36"},{"sidonm":"전라남도","sigunguareacd":"36020","sigungunm":"여수시","sidoareacd":"36"},{"sidonm":"전라남도","sigunguareacd":"36030","sigungunm":"순천시","sidoareacd":"36"},{"sidonm":"전라남도","sigunguareacd":"36040","sigungunm":"나주시","sidoareacd":"36"},{"sidonm":"전라남도","sigunguareacd":"36060","sigungunm":"광양시","sidoareacd":"36"},{"sidonm":"전라남도","sigunguareacd":"36310","sigungunm":"담양군","sidoareacd":"36"},{"sidonm":"전라남도","sigunguareacd":"36320","sigungunm":"곡성군","sidoareacd":"36"},{"sidonm":"전라남도","sigunguareacd":"36330","sigungunm":"구례군","sidoareacd":"36"},{"sidonm":"전라남도","sigunguareacd":"36350","sigungunm":"고흥군","sidoareacd":"36"},{"sidonm":"전라남도","sigunguareacd":"36360","sigungunm":"보성군","sidoareacd":"36"},{"sidonm":"전라남도","sigunguareacd":"36370","sigungunm":"화순군","sidoareacd":"36"},{"sidonm":"전라남도","sigunguareacd":"36380","sigungunm":"장흥군","sidoareacd":"36"},{"sidonm":"전라남도","sigunguareacd":"36390","sigungunm":"강진군","sidoareacd":"36"},{"sidonm":"전라남도","sigunguareacd":"36400","sigungunm":"해남군","sidoareacd":"36"},{"sidonm":"전라남도","sigunguareacd":"36410","sigungunm":"영암군","sidoareacd":"36"},{"sidonm":"전라남도","sigunguareacd":"36420","sigungunm":"무안군","sidoareacd":"36"},{"sidonm":"전라남도","sigunguareacd":"36430","sigungunm":"함평군","sidoareacd":"36"},{"sidonm":"전라남도","sigunguareacd":"36440","sigungunm":"영광군","sidoareacd":"36"},{"sidonm":"전라남도","sigunguareacd":"36450","sigungunm":"장성군","sidoareacd":"36"},{"sidonm":"전라남도","sigunguareacd":"36460","sigungunm":"완도군","sidoareacd":"36"},{"sidonm":"전라남도","sigunguareacd":"36470","sigungunm":"진도군","sidoareacd":"36"},{"sidonm":"전라남도","sigunguareacd":"36480","sigungunm":"신안군","sidoareacd":"36"},{"sidonm":"대전광역시","sigunguareacd":"25010","sigungunm":"동구","sidoareacd":"25"},{"sidonm":"대전광역시","sigunguareacd":"25020","sigungunm":"중구","sidoareacd":"25"},{"sidonm":"대전광역시","sigunguareacd":"25030","sigungunm":"서구","sidoareacd":"25"},{"sidonm":"대전광역시","sigunguareacd":"25040","sigungunm":"유성구","sidoareacd":"25"},{"sidonm":"대전광역시","sigunguareacd":"25050","sigungunm":"대덕구","sidoareacd":"25"},{"sidonm":"충청남도","sigunguareacd":"34010","sigungunm":"천안시","sidoareacd":"34"},{"sidonm":"충청남도","sigunguareacd":"34020","sigungunm":"공주시","sidoareacd":"34"},{"sidonm":"충청남도","sigunguareacd":"34030","sigungunm":"보령시","sidoareacd":"34"},{"sidonm":"충청남도","sigunguareacd":"34040","sigungunm":"아산시","sidoareacd":"34"},{"sidonm":"충청남도","sigunguareacd":"34050","sigungunm":"서산시","sidoareacd":"34"},{"sidonm":"충청남도","sigunguareacd":"34060","sigungunm":"논산시","sidoareacd":"34"},{"sidonm":"충청남도","sigunguareacd":"34070","sigungunm":"계룡시","sidoareacd":"34"},{"sidonm":"충청남도","sigunguareacd":"34080","sigungunm":"당진시","sidoareacd":"34"},{"sidonm":"충청남도","sigunguareacd":"34310","sigungunm":"금산군","sidoareacd":"34"},{"sidonm":"충청남도","sigunguareacd":"34330","sigungunm":"부여군","sidoareacd":"34"},{"sidonm":"충청남도","sigunguareacd":"34340","sigungunm":"서천군","sidoareacd":"34"},{"sidonm":"충청남도","sigunguareacd":"34350","sigungunm":"청양군","sidoareacd":"34"},{"sidonm":"충청남도","sigunguareacd":"34360","sigungunm":"홍성군","sidoareacd":"34"},{"sidonm":"충청남도","sigunguareacd":"34370","sigungunm":"예산군","sidoareacd":"34"},{"sidonm":"충청남도","sigunguareacd":"34380","sigungunm":"태안군","sidoareacd":"34"},{"sidonm":"경기도","sigunguareacd":"31010","sigungunm":"수원시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31020","sigungunm":"성남시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31030","sigungunm":"의정부시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31040","sigungunm":"안양시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31050","sigungunm":"부천시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31060","sigungunm":"광명시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31070","sigungunm":"평택시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31080","sigungunm":"동두천시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31090","sigungunm":"안산시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31100","sigungunm":"고양시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31110","sigungunm":"과천시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31120","sigungunm":"구리시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31130","sigungunm":"남양주시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31140","sigungunm":"오산시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31150","sigungunm":"시흥시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31160","sigungunm":"군포시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31170","sigungunm":"의왕시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31180","sigungunm":"하남시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31190","sigungunm":"용인시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31200","sigungunm":"파주시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31210","sigungunm":"이천시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31220","sigungunm":"안성시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31230","sigungunm":"김포시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31240","sigungunm":"화성시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31250","sigungunm":"광주시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31260","sigungunm":"양주시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31270","sigungunm":"포천시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31280","sigungunm":"여주시","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31350","sigungunm":"연천군","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31370","sigungunm":"가평군","sidoareacd":"31"},{"sidonm":"경기도","sigunguareacd":"31380","sigungunm":"양평군","sidoareacd":"31"},{"sidonm":"인천광역시","sigunguareacd":"23010","sigungunm":"중구","sidoareacd":"23"},{"sidonm":"인천광역시","sigunguareacd":"23020","sigungunm":"동구","sidoareacd":"23"},{"sidonm":"인천광역시","sigunguareacd":"23040","sigungunm":"연수구","sidoareacd":"23"},{"sidonm":"인천광역시","sigunguareacd":"23050","sigungunm":"남동구","sidoareacd":"23"},{"sidonm":"인천광역시","sigunguareacd":"23060","sigungunm":"부평구","sidoareacd":"23"},{"sidonm":"인천광역시","sigunguareacd":"23070","sigungunm":"계양구","sidoareacd":"23"},{"sidonm":"인천광역시","sigunguareacd":"23080","sigungunm":"서구","sidoareacd":"23"},{"sidonm":"인천광역시","sigunguareacd":"23090","sigungunm":"미추홀구","sidoareacd":"23"},{"sidonm":"인천광역시","sigunguareacd":"23310","sigungunm":"강화군","sidoareacd":"23"},{"sidonm":"인천광역시","sigunguareacd":"23320","sigungunm":"옹진군","sidoareacd":"23"},{"sidonm":"강원도","sigunguareacd":"32010","sigungunm":"춘천시","sidoareacd":"32"},{"sidonm":"강원도","sigunguareacd":"32020","sigungunm":"원주시","sidoareacd":"32"},{"sidonm":"강원도","sigunguareacd":"32030","sigungunm":"강릉시","sidoareacd":"32"},{"sidonm":"강원도","sigunguareacd":"32040","sigungunm":"동해시","sidoareacd":"32"},{"sidonm":"강원도","sigunguareacd":"32050","sigungunm":"태백시","sidoareacd":"32"},{"sidonm":"강원도","sigunguareacd":"32060","sigungunm":"속초시","sidoareacd":"32"},{"sidonm":"강원도","sigunguareacd":"32070","sigungunm":"삼척시","sidoareacd":"32"},{"sidonm":"강원도","sigunguareacd":"32310","sigungunm":"홍천군","sidoareacd":"32"},{"sidonm":"강원도","sigunguareacd":"32320","sigungunm":"횡성군","sidoareacd":"32"},{"sidonm":"강원도","sigunguareacd":"32330","sigungunm":"영월군","sidoareacd":"32"},{"sidonm":"강원도","sigunguareacd":"32340","sigungunm":"평창군","sidoareacd":"32"},{"sidonm":"강원도","sigunguareacd":"32350","sigungunm":"정선군","sidoareacd":"32"},{"sidonm":"강원도","sigunguareacd":"32360","sigungunm":"철원군","sidoareacd":"32"},{"sidonm":"강원도","sigunguareacd":"32370","sigungunm":"화천군","sidoareacd":"32"},{"sidonm":"강원도","sigunguareacd":"32380","sigungunm":"양구군","sidoareacd":"32"},{"sidonm":"강원도","sigunguareacd":"32390","sigungunm":"인제군","sidoareacd":"32"},{"sidonm":"강원도","sigunguareacd":"32400","sigungunm":"고성군","sidoareacd":"32"},{"sidonm":"강원도","sigunguareacd":"32410","sigungunm":"양양군","sidoareacd":"32"},{"sidonm":"충청북도","sigunguareacd":"33020","sigungunm":"충주시","sidoareacd":"33"},{"sidonm":"충청북도","sigunguareacd":"33030","sigungunm":"제천시","sidoareacd":"33"},{"sidonm":"충청북도","sigunguareacd":"33040","sigungunm":"청주시","sidoareacd":"33"},{"sidonm":"충청북도","sigunguareacd":"33320","sigungunm":"보은군","sidoareacd":"33"},{"sidonm":"충청북도","sigunguareacd":"33330","sigungunm":"옥천군","sidoareacd":"33"},{"sidonm":"충청북도","sigunguareacd":"33340","sigungunm":"영동군","sidoareacd":"33"},{"sidonm":"충청북도","sigunguareacd":"33350","sigungunm":"진천군","sidoareacd":"33"},{"sidonm":"충청북도","sigunguareacd":"33360","sigungunm":"괴산군","sidoareacd":"33"},{"sidonm":"충청북도","sigunguareacd":"33370","sigungunm":"음성군","sidoareacd":"33"},{"sidonm":"충청북도","sigunguareacd":"33380","sigungunm":"단양군","sidoareacd":"33"},{"sidonm":"충청북도","sigunguareacd":"33390","sigungunm":"증평군","sidoareacd":"33"},{"sidonm":"전라북도","sigunguareacd":"35010","sigungunm":"전주시","sidoareacd":"35"},{"sidonm":"전라북도","sigunguareacd":"35020","sigungunm":"군산시","sidoareacd":"35"},{"sidonm":"전라북도","sigunguareacd":"35030","sigungunm":"익산시","sidoareacd":"35"},{"sidonm":"전라북도","sigunguareacd":"35040","sigungunm":"정읍시","sidoareacd":"35"},{"sidonm":"전라북도","sigunguareacd":"35050","sigungunm":"남원시","sidoareacd":"35"},{"sidonm":"전라북도","sigunguareacd":"35060","sigungunm":"김제시","sidoareacd":"35"},{"sidonm":"전라북도","sigunguareacd":"35310","sigungunm":"완주군","sidoareacd":"35"},{"sidonm":"전라북도","sigunguareacd":"35320","sigungunm":"진안군","sidoareacd":"35"},{"sidonm":"전라북도","sigunguareacd":"35330","sigungunm":"무주군","sidoareacd":"35"},{"sidonm":"전라북도","sigunguareacd":"35340","sigungunm":"장수군","sidoareacd":"35"},{"sidonm":"전라북도","sigunguareacd":"35350","sigungunm":"임실군","sidoareacd":"35"},{"sidonm":"전라북도","sigunguareacd":"35360","sigungunm":"순창군","sidoareacd":"35"},{"sidonm":"전라북도","sigunguareacd":"35370","sigungunm":"고창군","sidoareacd":"35"},{"sidonm":"전라북도","sigunguareacd":"35380","sigungunm":"부안군","sidoareacd":"35"},{"sidonm":"경상남도","sigunguareacd":"38030","sigungunm":"진주시","sidoareacd":"38"},{"sidonm":"경상남도","sigunguareacd":"38050","sigungunm":"통영시","sidoareacd":"38"},{"sidonm":"경상남도","sigunguareacd":"38060","sigungunm":"사천시","sidoareacd":"38"},{"sidonm":"경상남도","sigunguareacd":"38070","sigungunm":"김해시","sidoareacd":"38"},{"sidonm":"경상남도","sigunguareacd":"38080","sigungunm":"밀양시","sidoareacd":"38"},{"sidonm":"경상남도","sigunguareacd":"38090","sigungunm":"거제시","sidoareacd":"38"},{"sidonm":"경상남도","sigunguareacd":"38100","sigungunm":"양산시","sidoareacd":"38"},{"sidonm":"경상남도","sigunguareacd":"38110","sigungunm":"창원시","sidoareacd":"38"},{"sidonm":"경상남도","sigunguareacd":"38310","sigungunm":"의령군","sidoareacd":"38"},{"sidonm":"경상남도","sigunguareacd":"38320","sigungunm":"함안군","sidoareacd":"38"},{"sidonm":"경상남도","sigunguareacd":"38330","sigungunm":"창녕군","sidoareacd":"38"},{"sidonm":"경상남도","sigunguareacd":"38340","sigungunm":"고성군","sidoareacd":"38"},{"sidonm":"경상남도","sigunguareacd":"38350","sigungunm":"남해군","sidoareacd":"38"},{"sidonm":"경상남도","sigunguareacd":"38360","sigungunm":"하동군","sidoareacd":"38"},{"sidonm":"경상남도","sigunguareacd":"38370","sigungunm":"산청군","sidoareacd":"38"},{"sidonm":"경상남도","sigunguareacd":"38380","sigungunm":"함양군","sidoareacd":"38"},{"sidonm":"경상남도","sigunguareacd":"38390","sigungunm":"거창군","sidoareacd":"38"},{"sidonm":"경상남도","sigunguareacd":"38400","sigungunm":"합천군","sidoareacd":"38"},{"sidonm":"제주도","sigunguareacd":"39010","sigungunm":"제주시","sidoareacd":"39"},{"sidonm":"제주도","sigunguareacd":"39020","sigungunm":"서귀포시","sidoareacd":"39"},{"sidonm":"세종특별자치시","sigunguareacd":"29010","sigungunm":"세종시","sidoareacd":"29"}]');
  $.each(areaList, function (index, item) {
    // 수정필요
    if (index == 0) {
      upperAreaList[item.sidoareacd] = item.sidonm;
    } else if (areaList[index - 1].sidoareacd != item.sidoareacd) {
      lowerArea = new Object;
      upperAreaList[item.sidoareacd] = item.sidonm;
    }
    lowerArea[item.sigunguareacd] = item.sigungunm;
    lowerAreaList[item.sidoareacd] = lowerArea;
  });
}

const createSelectAreaList = () => {
  let html = "";
  $("#sidoAreaCd").empty();
  html += '<option value="00">전국</option>';
  $.each(upperAreaList, function (sidocd, sidonm) {
    html += '<option value="' + sidocd + '">' + sidonm + '</option>';
  });
  $("#sidoAreaCd").append(html);
}
const createSelectSggList = (sidocd) => {
  let html = ""; $("#sigunguAreaCd").empty();
  if (sidocd == "00") {
    html += '<option value="">지역을 선택해주세요.</option>';
  } else {
    html += '<option value="">전체</option>';
    $.each(lowerAreaList[sidocd], function (sigungucd, sigungunm) {
      html += '<option value="' + sigungucd + '">' + sigungunm + '</option>';
    });
  }
  $("#sigunguAreaCd").append(html);
}

function enterkey() {
  if (window.event.keyCode == 13) {
    searchBtn();
  }
}



//테이블폼생성
function createtable(data) {
  var dataList = new Array();
  var row = '';
  dataList = data;
  var table = document.getElementById("table");
  for (var i = 0; i < dataList.length; i++) {
    row = row + "<tr>\n";
    //	row = row + "<td class='num'>"+ dataList[i].seqnum + "</td>\n";

    var cmpNm = document.getElementById("hidCmpNm").value;
    var rprsvNm = document.getElementById("hidRprsvNm").value;
    var bizRNo = document.getElementById("hidBizRNo").value;
    var pageNo = document.getElementById("hidPg").value;
    var areaCd = document.getElementById("hidArea").value;
    var indstyCd = document.getElementById("hidIndsty").value;

    var addParam = "";
    if ((cmpNm != null && cmpNm != "")
      || (rprsvNm != null && rprsvNm != "")
      || (bizRNo != null && bizRNo != "")
      || (pageNo != null && pageNo != "")) {
      addParam = "&cmpNm=" + encodeURI(cmpNm) + "&rprsvNm=" + encodeURI(rprsvNm) + "&bizRNo=" + bizRNo + "&pageNo=" + pageNo + "&areaCd=" + areaCd + "&indstyCd=" + indstyCd;
      /* row = row + "<td class='ta_l tit_td'><a href='/venturein/pbntc/searchVntrCmpDtls?vniaSn=" + dataList[i].vnia_sn + "&menuId=5000230" + addParam + "' class='c_tit'>" + dataList[i].cmp_nm + "</a></td>\n"; */
      row = row + "<td class='ta_l tit_td'><a href='javascript:vntrCmpDtls(\"" + dataList[i].vnia_sn + "\", \"5000230\", \"" + addParam + "\");' class='c_tit'>" + dataList[i].cmp_nm + "</a></td>\n";

    } else {
      /* row = row + "<td class='ta_l tit_td'><a href='/venturein/pbntc/searchVntrCmpDtls?vniaSn=" + dataList[i].vnia_sn + "&menuId=5000230' class='c_tit'>" + dataList[i].cmp_nm + "</a></td>\n"; */
      row = row + "<td class='ta_l tit_td'><a href='javascript:vntrCmpDtls(\"" + dataList[i].vnia_sn + "\");' class='c_tit'>" + dataList[i].cmp_nm + "</a></td>\n";
    }

    row = row + "<td>" + dataList[i].rprsv_nm + "</td>\n";
    if (dataList[i].bizrno != null && dataList[i].bizrno != "") {
      row = row + "<td class='ta_l'>" + dataList[i].bizrno.substr(0, 3) + "-" + dataList[i].bizrno.substr(3, 2) + "-" + dataList[i].bizrno.substr(5, 5) + "</td>\n";
      /* row = row + "<td class='ta_l'>" + dataList[i].bizrno.substr(0, 3) + "-" + dataList[i].bizrno.substr(3, 2) + "-*****</td>\n"; */
    } else {
      row = row + "<td class='ta_l'></td>\n";

    }
    row = row + "<td class='ta_l'>" + dataList[i].hdofc_addr + "</td>\n";
    row = row + "<td class='ta_l m_full'>" + dataList[i].indsty_nm + "</td>\n";
    row = row + "</tr>\n";
  }
  if (dataList.length == 0) {
    row = row + "<td colspan='6'>" + "조회된 값이 없습니다." + "</td>\n";
  }
  $("#table").empty();
  $("#table").append(row);
}

function searchBtn() {
  $("#pageIndex").val(1);
  search();
}

function search() {
  var pageNum = $("#pageIndex").val();
  fnSetData(pageNum);
}


function fnSetData(pageNum) {
  var sJson = {};
  var cmpNm = $("#cmpNm").val();  //기업명
  var rprsvNm = $("#rprsvNm").val(); //대표자명
  var bizRNo = $("input[name=bizRNo]").val();  //사업자번호
  var pageNo = pageNum;//페이지 번호
  var pageSize = $("select[name=pageSize]").val();
  var strArea = $("select[name=sidoAreaCd]").val();
  var strSigunguArea = $("select[name=sigunguAreaCd]").val();
  var strIndsty = $("select[name=selIndsty]").val();
  if (strArea == "00") {
    strArea = "";
  }
  sJson.cmpNm = cmpNm;
  sJson.rprsvNm = rprsvNm;
  sJson.bizRNo = bizRNo;
  sJson.pg = pageNo;

  document.getElementById("hidCmpNm").value = cmpNm;
  document.getElementById("hidRprsvNm").value = rprsvNm;
  document.getElementById("hidBizRNo").value = bizRNo;
  document.getElementById("hidPg").value = pageNo;
  document.getElementById("hidArea").value = strArea;
  document.getElementById("hidIndsty").value = strIndsty;

  $.ajax({
    url: "/venturein/pbntc/searchVntrCmpAction",
    type: "POST",
    data: JSON.stringify({
      "cmpNm": cmpNm
      , "rprsvNm": rprsvNm
      , "bizRNo": bizRNo
      , "pg": pageNo
      , "pageSize": pageSize
      , "areaCd": strArea
      , "sigunguAreaCd": strSigunguArea
      , "indstyCd": strIndsty
    }),
    dataType: "json",
    processData: true,
    contentType: "application/json; charset=UTF-8",
    success: function (data, textStatus, jqXHR) {
      if (data.RESULT == "SUCCESS") {
        createtable(data.DATA_LIST);
      } else {
        alert("조회 된 내역이 없습니다.");
      }


      var totRows = data.TOTAL_COUNT;

      //전체 건수 totalcnt
      $("#total").text("총  " + totRows + "건");
      $("#paging").empty();
      $("#paging").append(PagingHelper.pagingNavi(totRows));
    },
    error: function (data, textStatus) {
      //alert(data.message);
    }
  });

}
