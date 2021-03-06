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
import { ZoneRange } from './zoneRange';


/**
 * A union type representing the time spent in a given zone.
 */
export interface TimedZoneRange { 
    /**
     * The minimum value in the range.
     */
    min?: number;
    /**
     * The maximum value in the range.
     */
    max?: number;
    /**
     * The number of seconds spent in this zone
     */
    time?: number;
}
