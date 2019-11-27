var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoic2xhc2hnb2QiLCJhIjoiY2o4b21mcGh3MDUzYTJxcnNqMXVkYmxkOCJ9.W0vOMbxgRQSH4L0URnWZRA',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'The Oldest Heritage Buildings in Vancouver',
    subtitle: 'An aerial view of the city\'s historic landmarks',
    byline: 'By Sriram Sharma',
    footer: 'Source: Wikipedia, etc.',
    chapters: [
        {
            id: '1',
            title: 'Hastings Mill',
            image: 'https://upload.wikimedia.org/wikipedia/en/7/7d/Hastings_mill.jpg',
            description: 'Hastings Mill was a sawmill on the south shore of Burrard Inlet and was the first commercial operation around which the settlement that would become Vancouver developed in British Columbia, Canada. Founded in 1865 by Edward Stamp, the sawmill operated until its closure in 1928.<br/><br/><b>Architect: </b>Captain Edward Stamp & Associates',
            location: {
                center: [-123.18571, 49.27245],
                zoom: 16.00,
                pitch: 58.50,
                bearing: -173.77
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '2',
            title: 'Christ Church Cathedral',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/12/ChristChurchCathedral_Vancouver_BC_CA_2011-05-12.JPG',
            description: 'Style is English Romanesque. Built in 1889, the cathedral is located at 690 Burrard Street on the north-east corner of West Georgia Street and Burrard Street, directly across from the Fairmont Hotel Vancouver.<br/><br/><b>Architect: </b>Charles Osborn Wickenden',
            location: {
                center: [-123.12052, 49.28434],
                zoom: 17.00,
                pitch: 54.00,
                bearing: -134.57
            },
            onChapterEnter: [],
            onChapterExit: []
        },
       {
        id: '3',
        title: 'Holy Rosary Cathedral',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/HolyRosaryCathedral.jpg',
        description: 'The cathedral is the seat of the Roman Catholic Archdiocese of Vancouver. Built in 1899, the style is French Gothic, and very different from the castellated Anglican, United Church and Baptist churches on Burrard.<br/><br/><b>Architects: </b>Julien & Williams',
        location: {
            center: [-123.11464, 49.28194],
            zoom: 16.00,
            pitch: 60.00,
            bearing: 165.43
        },
        onChapterEnter: [],
        onChapterExit: []
    },
    {
        id: '4',
        title: 'Beatty Street Drill Hall',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/BeattyStDrillHallII.jpg',
        description: 'Home of The British Columbia Regiment (Duke of Connaught\'s Own), the most senior military unit in the city. It was constructed in 1899.<br/><br/><b>Architect: </b>David Ewart',
        location: {
            center: [-123.11081, 49.27938],
            zoom: 17.00,
            pitch: 58.50,
            bearing: -46.57
        },
        onChapterEnter: [],
        onChapterExit: []
    },
    {
        id: '5',
        title: 'Lord Strathcona Elementary School',
        image: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Strath_6.jpg',
        description: 'Descended from the first school in Vancouver, the primary building was constructed in 1921 from the bricks from the original 1891 school building on this site. <br/><br/><b>Architect: </b>William Blackmore',
        location: {
            center: [-123.09123, 49.27980],
            zoom: 14.00,
            pitch: 59.50,
            bearing: 175.21
        },
        onChapterEnter: [],
        onChapterExit: []
    },
    {
        id: '6',
        title: 'St. Paul’s Anglican Church of the West End, Vancouver',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/96/St._Paul%27s_Anglican_Episcopal_Church.JPG',
        description: 'Constructed in 1905, this Gothic Revival church is built in Vancouver\'s West End. <br/><br/><b>Architect: </b>William Henry Archer',
        location: {
            center: [-123.13397, 49.28313], 
            zoom: 17.00, 
            pitch: 60.00,
            bearing: -132.79
        },
        onChapterEnter: [],
        onChapterExit: []
    }, 
    {
        id: '7',
        title: 'Fire Hall No. 1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Fire_Hall_Arts_Centre.jpg',
        description: 'Constructed in 1906, it\'s possibly the first fire hall in North America designed specifically for motorized fire trucks, this building was converted into the Fire Hall Arts Centre in the 1970s. Listed as "Fire Hall No. 2." <br/><br/><b>Architect: </b>William T. Whiteway',
        location: {
            center: [-123.09789, 49.28193],
            zoom: 16.00,
            pitch: 55.00,
            bearing: 176.81
        },
        onChapterEnter: [],
        onChapterExit: []
    }, 
    {
        id: '8',
        title: 'Provincial Courthouse',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Vancouver_Art_Gallery_Robson_Square_from_third_floor.jpg',
        description: 'Constructed in 1906, This Neo-classical building was originally designed by Francis Rattenbury, who also designed the Empress Hotel & the Parliament Building in Victoria. In 1912 the West wing was added and designed by Thomas Hooper. It\'s currently the home to the Vancouver Art Gallery. <br/><br/><b>Architects: </b>Francis Rattenbury, Thomas Hooper',
        location: {
            center: [-123.12023, 49.28286],
            zoom: 16.00,
            pitch: 59.00,
            bearing: 139.21
        },
        onChapterEnter: [],
        onChapterExit: []
    }, 
    {
        id: '9',
        title: 'Sun Tower',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/SunOneTwo.jpg',
        description: 'At time of construction (1912), it was the tallest building in the British Empire, succeeded in that capacity by the Marine Building and preceded by the Dominion Building. <br/><br/><b>Architects: </b>L. D. Taylor; William T. Whiteway',
        location: {
            center: [-123.10809, 49.28077],
            zoom: 16.00, 
            pitch: 59.50,
            bearing: 167.21
        },
        onChapterEnter: [],
        onChapterExit: []
    },
    {
        id: '10',
        title: 'Dominon Building',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Dominion_Building_from_Canada_Place%2C_Vancouver.jpg',
        description: 'Located on the edge of Gastown (207 West Hastings St), it was Vancouver\'s first steel-framed high-rise. At 53 m (175 ft), the thirteen-storey, Second Empire style building was the tallest commercial building in the British Empire upon its completion in 1910. <br/><br/><b>Architect: </b> John S. Helyer',
        location: {
            center: [-123.10971, 49.28269],
            zoom: 16.00,
            pitch: 51.00,
            bearing: 44.81
        },
        onChapterEnter: [],
        onChapterExit: []
    }, 
    ]
};
