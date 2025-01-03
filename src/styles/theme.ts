import { css } from 'styled-components/native';

const typoCreator = (
  fontFamily: string,
  fontWeight?: number,
  fontSize?: string,
  letterSpacing?: string,
) => {
  return css`
    font-family: ${fontFamily};
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    letter-spacing: ${letterSpacing};
  `;
};

export const Theme = {
  colors: {
    Activated: '#00FFA6',
    Black: '#000000',
    Grey1: '#AAAAAA',
    Grey2: '#6D6D6D',
    'Primary-Blue': '#0043FF',
    'Secondary-Blue': '#92B4FF',
    Warning: '#FF4E3E',
    White: '#FFFFFF',
    Neutral: '#F5F5F7',
    Surface: '#FAFAFA',
    'Tertiary-Blue': '#001F63',
  },
  typo: {
    LOGO_47_BOLD: typoCreator('commutersans-semibold', 600, '47px', '0'),
    LOGO_27_BOLD: typoCreator('commutersans-semibold', 600, '27px', '-1.62px'),
    LOGO_20_BOLD: typoCreator('commutersans-semibold', 0, '20px', '-1.2px'),
    LOGO_12_BOLD: typoCreator('commutersans-semibold', 0, '12px', '-0.72px'),
    TITLE_25_BOLD: typoCreator('pretendard-variable', 700, '25px', '1px'),
    TITLE_20_BOLD: typoCreator('pretendard-variable', 700, '20px', '0.8px'),
    TITLE_15_SEMIBOLD: typoCreator('pretendard-variable', 600, '15px', '0.6px'),
    TITLE_15_MEDIUM: typoCreator('pretendard-variable', 500, '15px', '0.6px'),
    TITLE_13_MEDIUM: typoCreator('pretendard-variable', 500, '13px', '0.26px'),
    BODY_20_MEDIUM: typoCreator('pretendard-variable', 500, '20px', '0.4px'),
    BODY_15_REGULAR: typoCreator('pretendard-variable', 400, '15px', '0.3px'),
    BODY_13_REGULAR: typoCreator('pretendard-variable', 400, '13px', '0px'),
    BODY_13_LIGHT: typoCreator('pretendard-variable', 300, '13px', '0px'),
    BODY_11_LIGHT: typoCreator('pretendard-variable', 400, '11px', '0px'),
  },
};

export type TColor = keyof (typeof Theme)['colors'];
export type TTypo = keyof (typeof Theme)['typo'];
