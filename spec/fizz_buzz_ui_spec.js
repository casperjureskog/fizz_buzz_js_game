describe('Fizz_spec - index.html', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
        $('#player1').val('5');
        $('#calculate').trigger('click');
    });


    it("displays buzz Message", function() {
        expect($('#display_message').text()).toBe('Buzz');
    });


});
