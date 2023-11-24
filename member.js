function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controllerAs: 'vm',
        bindToController: true,
        Scope: {
            member: 'm'
        }
    }
}