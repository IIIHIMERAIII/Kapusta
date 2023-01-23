import { formating } from "components/Balance/BalanceForm"
import TotalStatsStyle from "./TotalStatisticsStyle"

const { List, AmountExpenses, AmountIncome, BoxStats } = TotalStatsStyle

const TotalStatistics = ({ expenses, income }) => {
    return (<BoxStats>
        <List>
            <AmountExpenses>Expenses:
                <span>{`- ${formating(expenses)} UAH.`}</span>
            </AmountExpenses>
            <AmountIncome>Income:
                <span>{ `+ ${formating(income)} UAH.` }</span>
            </AmountIncome>
        </List>
    </BoxStats>)
}

export default TotalStatistics