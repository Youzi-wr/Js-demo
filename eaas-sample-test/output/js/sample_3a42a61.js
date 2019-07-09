$(function () {

  /**
   * Sharetome + EaaS UI部署的访问路径，按实际部署情况进行配置
   */
  var __BIZ_HOST = $('#__BIZ_HOST').val();
  var __EAAS_HOST = $('#__EAAS_HOST').val();

  $(document).ready(
		function(){
			$.getJSON("eaas-demo-env.json", function (data){
		   
			var serverUrl= data.serverUrl;
			console.log("serverUrl:"+serverUrl)
			__BIZ_HOST = serverUrl;
			__EAAS_HOST=data.eaasServerUrl;
			})
		}
  
   );


  $('#btn-start').click(function () {
    var name = $('#name').val();
    var appId = $('#appid').val();
    var userId = $('#userid').val();
    var fileId = $('#fileid').val();
    var fileName = $('#fileName').val();
    var readonly = $('#filereadonly').is(':checked');
    var dfsMode = $('#dfsMode').is(':checked');
    var userToken = "a-fake-user-token";
    var userNickname = "DemoUser-" + new Date().getTime();

    var url = __BIZ_HOST + '/eaas-demo/api/session/app';
    var qs = {
      appId: appId,
      userId: userId,
      dfsMode: dfsMode,
      name: name
    };

    if (fileId) {
      url = __BIZ_HOST + '/eaas-demo/api/session/file';
      qs.fileId = fileId;
      qs.readOnly = readonly;
      qs.dfsMode = dfsMode;
      qs.fileName = fileName;    
    }

    $.ajax({
      type: "POST",
      url: url,
      dataType: 'json',
      data: JSON.stringify(qs),
      headers: {
        "Authorization": 'Bearer ' + userToken,
        "content-type": 'application/json'
      }
    }).done(function (json) {
      if (json.success) {
        var info = json.data;

        var sessionId = info.sessionId;
        var correlatedSessionId = info.correlatedSessionId;
        var gwHost = info.gwHost;
        var gwPort = info.gwPort;
        var mcuUrl = info.mcuUrl;
        var sessionMgrUrl = info.sessionMgrUrl;
        var readOnly = info.readOnly;
        var clientId = info.clientId;
        var clientToken = info.token;

        var params = JSON.stringify({
          "isParticipantMode": false,
          "readOnly": readOnly,
          "sessionId": sessionId,
          "correlatedSessionId": correlatedSessionId,
          "gwHost": gwHost,
          "gwPort": gwPort,
          "mcuUrl": mcuUrl,
          "sessionMgrUrl": sessionMgrUrl,
          "clientId": clientId,
          "clientToken": clientToken,
          "userId": userId,
          "userToken": userToken,
          "userNickname": userNickname
        });

        var code = (Base64.encode(params) + "").replace(/\//g, '_');
        var eaas = __EAAS_HOST + '/eaas/workspace/' + code;

        window.location.replace(eaas);
      } else {
        alert("[" + json.errorCode + "] " + json.message);
      }
    }).fail(function (res) {
      var json = JSON.parse(res.responseText);
      alert("[" + json.errorCode + "] " + json.message);
    });
  });
});

















