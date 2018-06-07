import moment from 'moment';

export default [
    {
        id: 'abv',
        title: 'Post one',
        body: 'This is post one',
        createdAt: 0
    },
    {
        id: 'gsdg',
        title: 'Post two',
        body: 'This is the second post',
        createdAt: moment(0).add(2, 'weeks').valueOf()
    },
    {
        id: 'hfv',
        title: 'Post three',
        body: 'This is the third post',
        createdAt: moment(0).subtract(5, 'days').valueOf()
    },
]