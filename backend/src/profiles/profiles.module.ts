import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './profiles.entity';
import { ProfilesResolver } from './profiles.resolver';
import { ProfilesService } from './profile.service';

@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  providers: [ProfilesResolver, ProfilesService],
})
export class ProfilesModule {}
