
import { BaseWSHandler } from '../../../architecture/message-handler/base-ws-handler'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { SerilizationHelper } from '../../../architecture/serilization/SerilizationHelper';
import { ChildComplexEligibilty } from '../../../child-benefits/domain/ChildComplexEligibilty'

import { LoggingService } from '../../../architecture/logging/logging.service'

export class ChildComplexEligibilityServiceHandler extends BaseWSHandler {

	url: string = "/baseURL";

	constructor(public logger: LoggingService, public http: Http) {
		super(http, logger);
	}

	extractResponseData(res: Response) {

		return SerilizationHelper.deserialize(ChildComplexEligibilty, res.json);

	}

	//The method that handle errors
	handleError(error: any) {

		this.logger.error("Error in the post service");
	}


}
