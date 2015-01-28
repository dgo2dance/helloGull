
<%@page import="com.matrixone.json.JSONObject"%>

<%@ page import="matrix.db.*,com.matrixone.apps.domain.DomainObject,java.util.List,com.matrixone.apps.*" %>
<%@ page import="matrix.db.JPO,java.util.Map,java.util.HashMap" %>
<%@page import="matrix.db.Context" %>
<%

   Context context = new Context("http://10.8.3.227:9080/enovia");
	context.setUser("Test Everything");
	context.setPassword("401401");
	context.connect();

  	String parameter = request.getParameter("TEST");
	
	System.out.println("----------test--AJAX-------------");

	System.out.println("--------ajax parameter--"+parameter);
	
	System.out.println("----------test--AJAX------END-------");

	String mql="temp query bus Part * * limit 200 where 'originated>=\"8/12/2014 10:00:00 am\" and originated<=\"8/12/2014 10:00:00 pm\"' select id name revision originated dump ,";
	System.out.println("----------test--mql------------"+mql);
	String result=com.matrixone.apps.domain.util.MqlUtil.mqlCommand(context,mql);

    System.out.println("------AJAX--RESULT----"+result);

// 	Map proMap=new HashMap();
// 	String[] arJPOArguments = new String[1];
// 	proMap.put("productName",productName);
// 	arJPOArguments = JPO.packArgs(proMap);
// //	String versions=(String)JPO.invoke(context, "YTInitialBOMReportAction", null,
// 		"getBOMVersions", arJPOArguments, String.class);
	JSONObject obj = new JSONObject();
	
	obj.put("message","result");

	//return the message
	response.getWriter().print(obj);
%>
