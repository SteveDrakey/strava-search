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
import { ActivityType } from './activityType';
import { LatLng } from './latLng';
import { MetaActivity } from './metaActivity';
import { MetaAthlete } from './metaAthlete';
import { PolylineMap } from './polylineMap';


export interface SummaryActivity {
    /**
     * The unique identifier of the activity
     */
    id?: number;
    /**
     * The identifier provided at upload time
     */
    externalId?: string;
    /**
     * The identifier of the upload that resulted in this activity
     */
    uploadId?: number;
    athlete?: MetaAthlete;
    /**
     * The name of the activity
     */
    name?: string;
    /**
     * The activity's distance, in meters
     */
    distance?: number;
    /**
     * The activity's moving time, in seconds
     */
    movingTime?: number;
    /**
     * The activity's elapsed time, in seconds
     */
    elapsedTime?: number;
    /**
     * The activity's total elevation gain.
     */
    totalElevationGain?: number;
    /**
     * The activity's highest elevation, in meters
     */
    elevHigh?: number;
    /**
     * The activity's lowest elevation, in meters
     */
    elevLow?: number;
    type?: ActivityType;
    /**
     * The time at which the activity was started.
     */
    startDate?: Date;
    /**
     * The time at which the activity was started in the local timezone.
     */
    startDateLocal?: Date;
    /**
     * The timezone of the activity
     */
    timezone?: string;
    startLatlng?: LatLng;
    endLatlng?: LatLng;
    /**
     * The number of achievements gained during this activity
     */
    achievementCount?: number;
    /**
     * The number of kudos given for this activity
     */
    kudosCount?: number;
    /**
     * The number of comments for this activity
     */
    commentCount?: number;
    /**
     * The number of athletes for taking part in a group activity
     */
    athlete_count?: number;
    /**
     * The number of Instagram photos for this activity
     */
    photoCount?: number;
    /**
     * The number of Instagram and Strava photos for this activity
     */
    totalPhotoCount?: number;
    map?: PolylineMap;
    /**
     * Whether this activity was recorded on a training machine
     */
    trainer?: boolean;
    /**
     * Whether this activity is a commute
     */
    commute?: boolean;
    /**
     * Whether this activity was created manually
     */
    manual?: boolean;
    /**
     * Whether this activity is private
     */
    _private?: boolean;
    /**
     * Whether this activity is flagged
     */
    flagged?: boolean;
    /**
     * The activity's workout type
     */
    workoutType?: number;
    /**
     * The activity's average speed, in meters per second
     */
    averageSpeed?: number;
    /**
     * The activity's max speed, in meters per second
     */
    maxSpeed?: number;
    /**
     * Whether the logged-in athlete has kudoed this activity
     */
    hasKudoed?: boolean;
    /**
     * The id of the gear for the activity
     */
    gearId?: string;
    /**
     * The total work done in kilojoules during this activity. Rides only
     */
    kilojoules?: number;
    /**
     * Average power output in watts during this activity. Rides only
     */
    averageWatts?: number;
    /**
     * Whether the watts are from a power meter, false if estimated
     */
    deviceWatts?: boolean;
    /**
     * Rides with power meter data only
     */
    maxWatts?: number;
    /**
     * Similar to Normalized Power. Rides with power meter data only
     */
    weightedAverageWatts?: number;
}
