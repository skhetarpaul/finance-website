import styled from 'styled-components'
// import defaultImg from '../images/service-1.jpeg'

const StyledHero = styled.header`
    min-height: 60vh;
    
    background: url(${props =>  props.img}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
`;

export default StyledHero 