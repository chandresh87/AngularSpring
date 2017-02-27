
import { ChildComplexEligibilityServiceHandler } from './ChildComplexEligibilityServiceHandler'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { LoggingService } from '../../../architecture/logging/logging.service'
import { ChildComplexEligibilty } from '../../../child-benefits/domain/ChildComplexEligibilty'
import { SerilizationHelper } from '../../../architecture/serilization/SerilizationHelper';
import { Injectable } from '@angular/core';

@Injectable()
export class ChildComplexEligibilityService {
	ComplexEligibilityServiceHandler: ChildComplexEligibilityServiceHandler = new ChildComplexEligibilityServiceHandler(this.logger, this.http);

	constructor(public logger: LoggingService, public http: Http) {

	}


	postData(childComplexEligibilty: ChildComplexEligibilty) {
		this.logger.info(SerilizationHelper.Serilize(childComplexEligibilty));
		console.log("post object is " + SerilizationHelper.Serilize(childComplexEligibilty));

		return this.ComplexEligibilityServiceHandler.post(childComplexEligibilty);

	}

}