function goSearch(){
                window.parent.postMessage({
                    "currentPage":"1",
                    "s_yngugubn":"3",
                    "y_code":"",
                    "yngucode":"",
                    "current_url":"",
                    "save_s_key":"",
                    "save_s_type":"",
                    "save_s_yngugubn":"",
                    "save_s_custsuno1":"",
                    "save_s_custsuno2":"",
                    "save_s_custsuno3":"",
                    "save_s_custgwmo":"",
                    "save_s_yngu_si":"",
                    "save_s_yngu_gun":"",
                    "save_s_custksic":"",
                    "save_s_custksic2":"",
                    "save_y_code":"",
                    "save_s_codename":"",
                    "save_s_ynguinno":"",
                    "excel_yn":"N",
                    "s_type":document.querySelector("#s_type").value,
                    "s_key":document.querySelector("#s_key").value,
                    "s_custsuno1":document.querySelector("#s_custsuno1").value,
                    "s_custsuno2":document.querySelector("#s_custsuno2").value,
                    "s_custsuno3":document.querySelector("#s_custsuno3").value,
                    "s_custksic":document.querySelector("#s_custksic").value,
                    "s_custksic2":document.querySelector("#s_custksic2").value,
                    "s_yngu_si":document.querySelector("#s_yngu_si").value,
                    "s_yngu_gun":document.querySelector("#s_yngu_gun").value,
                    "s_codename":document.querySelector("#s_codename").value,
                    "s_custgwmo":document.querySelector("#s_custgwmo").value,
                    "s_ynguinno":document.querySelector("#s_ynguinno").value,
                    "recordCountPerPage":document.querySelector("#recordCountPerPage").value
                  }, '*')
            }

            function moveList(pageNo) {
                window.parent.postMessage({
                    "currentPage":pageNo || 1,
                    "s_yngugubn":"3",
                    "y_code":"",
                    "yngucode":"",
                    "current_url":"",
                    "save_s_key":"",
                    "save_s_type":"",
                    "save_s_yngugubn":"",
                    "save_s_custsuno1":"",
                    "save_s_custsuno2":"",
                    "save_s_custsuno3":"",
                    "save_s_custgwmo":"",
                    "save_s_yngu_si":"",
                    "save_s_yngu_gun":"",
                    "save_s_custksic":"",
                    "save_s_custksic2":"",
                    "save_y_code":"",
                    "save_s_codename":"",
                    "save_s_ynguinno":"",
                    "excel_yn":"N",
                    "s_type":document.querySelector("#s_type").value,
                    "s_key":document.querySelector("#s_key").value,
                    "s_custsuno1":document.querySelector("#s_custsuno1").value,
                    "s_custsuno2":document.querySelector("#s_custsuno2").value,
                    "s_custsuno3":document.querySelector("#s_custsuno3").value,
                    "s_custksic":document.querySelector("#s_custksic").value,
                    "s_custksic2":document.querySelector("#s_custksic2").value,
                    "s_yngu_si":document.querySelector("#s_yngu_si").value,
                    "s_yngu_gun":document.querySelector("#s_yngu_gun").value,
                    "s_codename":document.querySelector("#s_codename").value,
                    "s_custgwmo":document.querySelector("#s_custgwmo").value,
                    "s_ynguinno":document.querySelector("#s_ynguinno").value,
                    "recordCountPerPage":document.querySelector("#recordCountPerPage").value
                  }, '*')
            }


            function PS_pop(P_IDX) {
                window.open("/rnd/user/infoservice/pop_product.do?IDX="+P_IDX,"popup01","height=724,width=950");
            }
            
            function getJobList2(){
                var s_custksic = $("#s_custksic option:selected").val();
                
                if(s_custksic == ""){
                    alert("업종을 선택하여 주세요.");
                    return false;
                }
                
                var data = {
                        "s_custksic" : $("#s_custksic option:selected").val()
                };
                
                $.ajax({
                    type    :   "post",
                    url     :   "/rnd/user/infoservice/job.do",
                    data    :   data,
                    dataType:   "json",
                    success :   function(data) {
                                    $("select[name='s_custksic2'] option").remove();
                                    if(data.result.length == 0){
                                    }else{
                                        $('#s_custksic2').append('<option value="">--중분류 선택--</option>');
                                        for(var i =0; i < data.result.length; i++){
                                            $('#s_custksic2').append('<option value="'+data.result[i].CODE+'">'+data.result[i].CODE_KNM +'</option>');
                                        }
                                    }
                    },
                    error   :   function(data){
                                    alert("시스템 에러가 발생하였습니다.");
                                }
                });
            }
            
            function getGugunList(){
                var s_yngu_si = $("#s_yngu_si option:selected").val();
                
                if(s_yngu_si == ""){
                    alert("시도를 선택하여 주세요.");
                    return false;
                }
                
                var data = {
                        "s_yngu_si" : s_yngu_si
                };
                
                $.ajax({
                    type    :   "post",
                    url     :   "/rnd/user/infoservice/sido.do",
                    data    :   data,
                    dataType:   "json",
                    success :   function(data) {
                                    $("select[name='s_yngu_gun'] option").remove();
                                    if(data.result.length == 0){
                                    }else{
                                        $('#s_yngu_gun').append('<option value="">구/군(전체)</option>');
                                        for(var i =0; i < data.result.length; i++){
                                            //$('#s_yngu_gun').append('<option value="'+data.result[i].A_GUGUN_CODE+'">'+data.result[i].A_GUGUN_NAME+'</option>');
                                            $('#s_yngu_gun').append('<option value="'+data.result[i].A_GUGUN_NAME+'">'+data.result[i].A_GUGUN_NAME+'</option>');
                                        }
                                    }
                    },
                    error   :   function(data){
                                    alert("시스템 에러가 발생하였습니다.");
                                }
                });
            }
