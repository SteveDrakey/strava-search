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


/**
 * A row in a segment leaderboard
 */
export interface SegmentLeaderboardEntry {
    /**
     * The public name of the athlete
     */
    athlete_name?: string;
    /**
     * The elapsed of the segment effort associated with this entry
     */
    elapsed_time?: number;
    /**
     * The moving of the segment effort associated with this entry
     */
    movingTime?: number;
    /**
     * The time at which the effort was started.
     */
    start_date?: Date;
    /**
     * The time at which the effort was started in the local timezone.
     */
    startDateLocal?: Date;
    /**
     * The rank of this entry in the leaderboard
     */
    rank?: number;
}
