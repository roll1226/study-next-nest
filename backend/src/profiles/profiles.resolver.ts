import { Args, Query, Resolver } from '@nestjs/graphql';
import { Profile } from './profiles.entity';
import { FindProfileDto } from './dto/find-profile.dto';
import { ProfilesService } from './profile.service';

@Resolver()
export class ProfilesResolver {
  constructor(private readonly profilesService: ProfilesService) {}

  @Query(() => Profile)
  async getProfile(
    @Args('findProfile') findProfileDto: FindProfileDto,
  ): Promise<Profile> {
    return this.profilesService.findOne(findProfileDto.id);
  }
}
