import styled from 'styled-components'
import Select from "@material-ui/core/Select"

export const Container = styled.div`
 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const Label = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;

`
export const FiltersContainer = styled.div`
    width: (100vw - 64px);
    margin: 32px 32px 0 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const CustomSelect = styled(Select)`
    width: 200px;
    margin: 0 32px 8px 0;
 `   