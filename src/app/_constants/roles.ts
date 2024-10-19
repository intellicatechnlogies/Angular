export const roles = {
    NA: 'National Admin',
    NPM: 'National Program Manager',
    NTU: 'National Thematic User',
    BA: 'Block Admin',
    BTU: 'Block Thematic User',
    BPM: 'Block Program Manager',
    DA: 'District Admin',
    DTU: 'District Thematic User',
    DPM: 'District Program Manager',
    SA: 'State Admin',
    SPM: 'State Program Manager',
    STU: 'State Thematic User',
    CLF_SHG_APP: 'CLF User (SHG Trans Approver)',
    CLF_VO_APP: 'CLF User (VO Trans Approver)',
    CLF_BK: 'CLF User (Bookkeeper)',
    SHG_BK: 'SHG User (Bookkeeper)',
    VO_BK: 'VO User (Bookkeeper)',
    VO_SHG_APP: 'VO user (SHG Trans Approver)',
    CRP: 'CRP Aajeevika',
    FAA : 'Final Approval Authority'

};

export const roleIdMapping = [
    /** BLOCK */
    {
        roleName: roles.BA,
        roleId: '690',
        imageUrl: '../../assets/images/avatars/avatar1.png',
        categoryId: '62',
        categoryName: 'Block',
        show: true
    },
    {
        roleName: roles.BPM,
        roleId: '670',
        imageUrl: '../../assets/images/avatars/avatar2.png',
        categoryId: '62',
        categoryName: 'Block',

        show: true
    },
    {
        roleName: roles.BTU,
        roleId: '650',
        imageUrl: '../../assets/images/avatars/avatar3.png',
        categoryId: '62',
        categoryName: 'Block',
        show: true
    },
    /** CLF */
    {
        roleName: roles.CLF_BK,
        roleId: '510',
        imageUrl: '../../assets/images/avatars/avatar1.png',
        categoryId: '51',
        categoryName: 'CLF',
        show: true
    },
    {
        roleName: roles.CLF_VO_APP,
        roleId: '550',
        imageUrl: '../../assets/images/avatars/avatar2.png',
        categoryId: '51',
        categoryName: 'CLF',
        show: true
    },
    {
        roleName: roles.CLF_SHG_APP,
        roleId: '530',
        imageUrl: '../../assets/images/avatars/avatar3.png',
        categoryId: '51',
        categoryName: 'CLF',
        show: false
    },
    /** SHG */
    {
        roleName: roles.SHG_BK,
        roleId: '310',
        imageUrl: '../../assets/images/avatars/avatar1.png',
        categoryId: '31',
        categoryName: 'SHG',
        show: false
    },
    /** VO */
    {
        roleName: roles.VO_BK,
        roleId: '410',
        imageUrl: '../../assets/images/avatars/avatar1.png',
        categoryId: '41',
        categoryName: 'VO',
        show: false
    },
    {
        roleName: roles.VO_SHG_APP,
        roleId: '450',
        imageUrl: '../../assets/images/avatars/avatar1.png',
        categoryId: '41',
        categoryName: 'VO',
        show: false
    },
    /** District */
    {
        roleName: roles.DA,
        roleId: '790',
        imageUrl: '../../assets/images/avatars/avatar1.png',
        categoryId: '72',
        categoryName: 'District',
        show: true
    },
    {
        roleName: roles.DPM,
        roleId: '770',
        imageUrl: '../../assets/images/avatars/avatar2.png',
        categoryId: '72',
        categoryName: 'District',
        show: true
    },
    {
        roleName: roles.DTU,
        roleId: '750',

        imageUrl: '../../assets/images/avatars/avatar3.png',
        categoryId: '72',
        categoryName: 'District',
        show: true
    },
    /** State */
    {
        roleName: roles.SA,
        roleId: '890',
        imageUrl: '../../assets/images/avatars/avatar1.png',
        categoryId: '87',
        categoryName: 'State',
        show: true
    },
    {
        roleName: roles.SPM,
        roleId: '870',
        imageUrl: '../../assets/images/avatars/avatar2.png',
        categoryId: '87',
        categoryName: 'State',
        show: true
    },
    {
        roleName: roles.STU,
        roleId: '850',
        imageUrl: '../../assets/images/avatars/avatar3.png',
        categoryId: '87',
        categoryName: 'State',
        show: true
    },
    /** National */
    {
        roleName: roles.NA,
        roleId: '990',
        imageUrl: '../../assets/images/avatars/avatar1.png',
        categoryId: '91',
        categoryName: 'National',
        show: true
    },
    {
        roleName: roles.NPM,
        roleId: '970',
        imageUrl: '../../assets/images/avatars/avatar2.png',
        categoryId: '91',
        categoryName: 'National',
        show: true
    },
    {
        roleName: roles.NTU,
        roleId: '950',
        imageUrl: '../../assets/images/avatars/avatar3.png',
        categoryId: '91',
        categoryName: 'National',
        show: true
    },
    {
        roleName: roles.CRP,
        roleId: '420',
        imageUrl: '../../assets/images/avatars/avatar1.png',
        categoryId: '42',
        categoryName: 'CRP',
        show: false
    }
];