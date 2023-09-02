import { Server, Member, Profile, Channel } from "@prisma/client";

export type ServerWithMembersWithProfiles = Server & {
  members: (Member & { proflie: Profile })[];
};
