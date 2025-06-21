const dateFormatter = new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short'
})

export const formatDate = (date) => dateFormatter.format(date);