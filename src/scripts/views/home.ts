import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      name: '',
      email: '',
      company: '',
      yourPosition: null,
      yourPositionItems: [
        this.$t('views.home.yourPositionItems.managementOrExecutiveLevel'),
        this.$t('views.home.yourPositionItems.departmentManagerLevel'),
        this.$t('views.home.yourPositionItems.sectionChiefOrManagerLevel'),
        this.$t(
          'views.home.yourPositionItems.sectionChiefOrChiefOrleaderLevel'
        ),
        this.$t('views.home.yourPositionItems.generalEmployeeLevel'),
        this.$t('views.home.yourPositionItems.agencyOrClientProposals'),
        this.$t('views.home.yourPositionItems.otherOrSoleProprietorship'),
      ],
      inquiryType: null,
      inquiryTypeItems: [
        this.$t('views.home.inquiryTypeItems.forNewInstallations'),
        this.$t('views.home.inquiryTypeItems.operationDuringInstallation'),
        this.$t('views.home.inquiryTypeItems.other'),
      ],
      detailsOfYourInquiry: '',
      ngWordTest: '',
    }
  },
})
