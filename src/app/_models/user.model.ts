export interface LOGIN_INFO {
  gid: string;
  role: string;
  stateId: string;
  tenentId: string;
  token: string;
  tokenExpiry: string;
  userName: string;
}

export interface MASTER_PAYLOAD {
  blockId : string;
  districtId : string;
  panchayatId : string;
  stateId : string;
  villageId : string;
}

export interface USER_INFO {
  UserDetail: USER_DEATAIL[];
  UserRoleRightsMapDetail: USER_ROLE_RIGHTS_MAP_DETAIL[];
  userRoleDetail: USER_ROLE_DETAIL[];
};

export interface USER_ROLE_DETAIL {
  roleId: string;
  roleName: string;
  categoryId: string;
  status: number;
  createdOn: Date | null;
  createdBy: string | null;
}
export interface USER_ROLE_RIGHTS_MAP_DETAIL {
  userId: string;
  roleId: string;
  stateId: string;
  districtId: string;
  blockId: string;
  panchayatId: string;
  villageId: string;
  roleStatus: number
}

export interface USER_DEATAIL {
  userId: string;
  userName: string;
  roleName: string | null,
  roleId: string | null,
  categoryName: string | null,
  mobileNo: number
  emailId: string | null,
  designation: string | null,
  status: number,
  createdOn: Date | null,
  createdBy: string | null,
  lastModifiedOn: Date | null,
  lastModifiedBy: string | null,
  mappedCount: number | null,
  mappedShgCount: number | null,
  mappedFederationCount: number | null
}