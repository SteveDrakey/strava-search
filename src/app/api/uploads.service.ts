/**
 * Strava API v3
 * Strava API
 *
 * OpenAPI spec version: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Fault } from '../model/fault';
import { Upload } from '../model/upload';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class UploadsService {

    protected basePath = 'https://www.strava.com/api/v3';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Upload Activity
     * Uploads a new data file to create an activity from. Requires activity:write scope.
     * @param file The uploaded file.
     * @param name The desired name of the resulting activity.
     * @param description The desired description of the resulting activity.
     * @param trainer Whether the resulting activity should be marked as having been performed on a trainer.
     * @param commute Whether the resulting activity should be tagged as a commute.
     * @param dataType The format of the uploaded file.
     * @param externalId The desired external identifier of the resulting activity.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUpload(file?: Blob, name?: string, description?: string, trainer?: string, commute?: string, dataType?: 'fit' | 'fit.gz' | 'tcx' | 'tcx.gz' | 'gpx' | 'gpx.gz', externalId?: string, observe?: 'body', reportProgress?: boolean): Observable<Upload>;
    public createUpload(file?: Blob, name?: string, description?: string, trainer?: string, commute?: string, dataType?: 'fit' | 'fit.gz' | 'tcx' | 'tcx.gz' | 'gpx' | 'gpx.gz', externalId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Upload>>;
    public createUpload(file?: Blob, name?: string, description?: string, trainer?: string, commute?: string, dataType?: 'fit' | 'fit.gz' | 'tcx' | 'tcx.gz' | 'gpx' | 'gpx.gz', externalId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Upload>>;
    public createUpload(file?: Blob, name?: string, description?: string, trainer?: string, commute?: string, dataType?: 'fit' | 'fit.gz' | 'tcx' | 'tcx.gz' | 'gpx' | 'gpx.gz', externalId?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {








        let headers = this.defaultHeaders;

        // authentication (strava_oauth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void | HttpParams; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (file !== undefined) {
            formParams = formParams.append('file', <any>file) || formParams;
        }
        if (name !== undefined) {
            formParams = formParams.append('name', <any>name) || formParams;
        }
        if (description !== undefined) {
            formParams = formParams.append('description', <any>description) || formParams;
        }
        if (trainer !== undefined) {
            formParams = formParams.append('trainer', <any>trainer) || formParams;
        }
        if (commute !== undefined) {
            formParams = formParams.append('commute', <any>commute) || formParams;
        }
        if (dataType !== undefined) {
            formParams = formParams.append('data_type', <any>dataType) || formParams;
        }
        if (externalId !== undefined) {
            formParams = formParams.append('external_id', <any>externalId) || formParams;
        }

        return this.httpClient.post<Upload>(`${this.basePath}/uploads`,
            convertFormParamsToString ? formParams.toString() : formParams,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get Upload
     * Returns an upload for a given identifier. Requires activity:write scope.
     * @param uploadId The identifier of the upload.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUploadById(uploadId: number, observe?: 'body', reportProgress?: boolean): Observable<Upload>;
    public getUploadById(uploadId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Upload>>;
    public getUploadById(uploadId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Upload>>;
    public getUploadById(uploadId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uploadId === null || uploadId === undefined) {
            throw new Error('Required parameter uploadId was null or undefined when calling getUploadById.');
        }

        let headers = this.defaultHeaders;

        // authentication (strava_oauth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Upload>(`${this.basePath}/uploads/${encodeURIComponent(String(uploadId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
