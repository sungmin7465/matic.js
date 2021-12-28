import { HttpRequest } from "../utils";

export class ABIService {
    httpRequest: HttpRequest;

    constructor(baseUrl: string) {
        this.httpRequest = new HttpRequest(baseUrl);
    }

    setBaseUrl(baseUrl) {
        this.httpRequest.baseUrl = baseUrl;
    }

    getABI(network: string, version: string, bridgeType: string, contractName: string) {
        const url = `${network}/${version}/artifacts/${bridgeType}/${contractName}.json`;
        console.log("getting abi from :", this.httpRequest.baseUrl + url); // TODO(ysm) : remove this
        return this.httpRequest.get(url).then((result: any) => {
            return result.abi;
        });
    }

    getAddress(network: string, version: string) {
        const url = `${network}/${version}/index.json`;
        console.log("getting address from :", this.httpRequest.baseUrl + url); // TODO(ysm) : remove this
        return this.httpRequest.get(url);
    }
}