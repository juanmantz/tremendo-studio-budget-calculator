<!-- Include jQuery if not already loaded -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function() {
    function calculateBudget() {
        var budget = 0;

        // Use data-name for selectors
        $('input[data-name]').each(function() {
            var inputType = $(this).attr('type');
            var name = $(this).data('name');
            var value = $(this).is(':checkbox') ? $(this).prop('checked') : $(this).val();

            // Convert numeric values
            if ($.isNumeric(value)) {
                value = parseFloat(value);
            }

            // Custom logic based on the input name
            switch (name) {
                case 'pages':
                case 'animations':
                    budget += value;
                    break;
                case 'advanced_seo':
                case 'user_access':
                case 'career_page':
                case 'filtering_system':
                    if ($(this).prop('checked')) {
                        budget += parseFloat($(this).val());
                    }
                    break;
                default:
                    if ($(this).prop('checked')) {
                        budget += parseFloat($(this).val());
                    }
                    break;
            }
        });

        // Update the display
        $('[bloc="budget"]').text('$' + budget.toFixed(2));
    }

    // Event listener for any change in inputs
    $('input[data-name]').change(calculateBudget);
});
</script>
