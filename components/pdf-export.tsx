import {
  Document,
  Page,
  PDFDownloadLink,
  Text,
  View,
} from '@react-pdf/renderer'

import { styles as buttonStyles } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function PDFExport() {
  return (
    <PDFDownloadLink
      className={cn('inline-block', buttonStyles.base, buttonStyles.primary)}
      fileName="cv.pdf"
      document={
        <Document>
          <Page>
            <View>
              <Text>Hello World!</Text>
            </View>
          </Page>
        </Document>
      }
    >
      Export to PDF
    </PDFDownloadLink>
  )
}
