import React, { 
    useEffect, 
    useState 
} from 'react'
import { 
    Breakpoint, 
    Colors, 
    Transition 
} from '../../variables'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { LikedPictureData } from '../../interfaces';
import { 
    GET_LIKED_PICTURES_BY_FAMILYMEMBER_ID_AND_ALBUMITEM_ID, 
    LIKE_PICTURE, 
    REMOVE_LIKE 
} from '../../graphql/albumItems';
import { 
    useLazyQuery, 
    useMutation 
} from '@apollo/client';

interface LikeButtonProps {
    userId: number,
    pictureId: number
}

interface StyledButtonProps {
    heart: boolean
}

const StyledButton = styled.button<StyledButtonProps>`
    background: none;
    font-size: 1.5rem;
    transition: ${Transition.normal};
    @media (min-width: ${Breakpoint.small}) {
        font-size: 1.75rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        font-size: 2rem;
    }
    svg {
        transition: ${Transition.normal};
        path {
            transition: ${Transition.normal};
            stroke: ${(StyledButtonProps) => StyledButtonProps.heart ? Colors.red : Colors.primary};
            stroke-width: 55;
        }
        color: ${(StyledButtonProps) => StyledButtonProps.heart ? Colors.red : Colors.secondary};
    }

    &:hover {
        transform: translateY(-5px);
    }
`



const LikeButton: React.FC<LikeButtonProps> = ({ userId, pictureId}) => {
    const [liked, setLiked] = useState(false);
    const [clicked, setClicked] = useState(false);

    const [fetchLike, { data, loading, error }] = useLazyQuery<LikedPictureData>(GET_LIKED_PICTURES_BY_FAMILYMEMBER_ID_AND_ALBUMITEM_ID, {
        variables: {
            familyMemberId: userId,
            albumItemId: pictureId
        }
    });

    const [likePicture, {  }] = useMutation<LikedPictureData>(LIKE_PICTURE, {
        variables: {
            input: {
                familyMemberId: userId,
                albumItemId: pictureId
            }
        }
    });

    const [removeLike, {  }] = useMutation<LikedPictureData>(REMOVE_LIKE, {
        variables: {
            input : {
                familyMemberId: userId,
                albumItemId: pictureId
            }
        }
    });    

    useEffect(() => {
        fetchLike();
    }, []);

    const handleClicking = () => {
        setClicked(!clicked);
        setLiked(!liked);
        if(!liked) {
            likePicture();
        } 
        if(liked) {
            removeLike();
        }
    }

    if(loading) {
    }
    if(error) {
    }
    if(data && !liked) {
        setLiked(true);
    }

    return (
        <>
            <StyledButton heart={liked} onClick={handleClicking}>
                <FontAwesomeIcon icon={faHeart} />
            </StyledButton>
        </>
    )
}

export default LikeButton;