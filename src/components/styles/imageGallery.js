import styled from "styled-components";
import { colors } from "../common/element/elements.js";


export const Styles = styled.div`
    .gallery-area {


        .sec-title {
            .color-red{
               color : ${colors.red}
            }

            .color-blue{
                 color : ${colors.blue}
            }
            h4 {
                color        : ${colors.black1};
                line-height  : 25px;
                font-weight  : 600;
                // max-width    : 550px;
                margin       : auto;
                margin-bottom: 50px;
                text-align : centre;
                margin-top : 50px;

                @media(max-width: 575px) {
                    margin-bottom: 15px;
                    font-size: 20px;
                }
            }
        }

        .gallery-box {
            overflow: hidden;
            position: relative;
            img {
                transition : all 0.3s ease;
                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }
`;