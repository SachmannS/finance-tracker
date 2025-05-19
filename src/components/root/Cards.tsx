import { Badge, VStack, Stat, FormatNumber, HStack } from "@chakra-ui/react";
import type { CardStatsProps } from '../../types/CardStatsProps'

function Cards({ label, value, currency = "INR", change, isPositive = true, helpText =""}: CardStatsProps) {
    return (
        <Stat.Root width={'100%'} display={'flex'} justifyContent={'flex-start'} alignItems={'flex-start'} m={'auto'} border={'sm'} p={2} borderColor={'black'} borderWidth={'1px'} gap={3} borderRadius={'md'}>
            <Stat.Label fontWeight={"bold"} fontSize={'1rem'} color={'Black'} mb={2}>{label}</Stat.Label>
            <VStack>
                <Stat.ValueText color={'black'}>
                    <FormatNumber value={value} style="currency" currency={currency} />
                </Stat.ValueText>
                <HStack>
                    <Badge color={'black'} backgroundColor={isPositive ? 'green.100' : 'red.100'} gap="0">
                        {isPositive ? <Stat.UpIndicator colorPalette={'green'} /> : <Stat.DownIndicator colorPalette={'red'} />}
                        {change}%
                    </Badge>
                    <Stat.HelpText>{helpText}</Stat.HelpText>
                </HStack>
            </VStack>
        </Stat.Root>
    );
}

export default Cards;