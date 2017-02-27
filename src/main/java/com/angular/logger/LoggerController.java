package com.angular.logger;


import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.angular.logger.bean.LogMessage;


@RestController
public class LoggerController {
	
	
	static final Logger debugLog = Logger.getLogger(LoggerController.class).getLogger("debugLog");
	static final Logger angularAppLog = Logger.getLogger("angularAppLog");
	
	@RequestMapping(method=RequestMethod.POST,produces="application/json",value="/logger",consumes="application/json")
	@ResponseStatus(HttpStatus.OK)
	public  String logAngularData(@RequestBody LogMessage logData)
	{
		System.out.println(logData.getMessage());
		angularAppLog.debug(logData.getMessage());
		return "Logged Successfully";
	}

}
