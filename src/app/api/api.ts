export * from './activities.service';
import { ActivitiesService } from './activities.service';
export * from './athletes.service';
import { AthletesService } from './athletes.service';
export * from './clubs.service';
import { ClubsService } from './clubs.service';
export * from './gears.service';
import { GearsService } from './gears.service';
export * from './routes.service';
import { RoutesService } from './routes.service';
export * from './runningRaces.service';
import { RunningRacesService } from './runningRaces.service';
export * from './segmentEfforts.service';
import { SegmentEffortsService } from './segmentEfforts.service';
export * from './segments.service';
import { SegmentsService } from './segments.service';
export * from './streams.service';
import { StreamsService } from './streams.service';
export * from './uploads.service';
import { UploadsService } from './uploads.service';
export const APIS = [ActivitiesService, AthletesService, ClubsService, GearsService, RoutesService, RunningRacesService, SegmentEffortsService, SegmentsService, StreamsService, UploadsService];
