import { formating } from "components/Balance/BalanceForm"
import TotalStatsStyle from "./TotalStatisticsStyle"

const { List, AmountExpenses, AmountIncome, BoxStats } = TotalStatsStyle

const TotalStatistics = ({ expenses, income }) => {
    return (<BoxStats>
        <List>
            <li>Expenses:
                <AmountExpenses>{`- ${formating(expenses)} UAH.`}</AmountExpenses>
            </li>
            <li>Income:
                <AmountIncome>{ `+ ${formating(income)} UAH.` }</AmountIncome>
            </li>
        </List>
    </BoxStats>)
}

export default TotalStatistics