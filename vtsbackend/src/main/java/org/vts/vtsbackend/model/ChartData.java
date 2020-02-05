/**
 *
 */
package org.vts.vtsbackend.model;


/**
 * @author sidVijay
 *
 */
public class ChartData {


    private String labelData;
    private int valueData;


    public ChartData() {
        super();
    }

    public ChartData(String labelData, int valueData) {
        this.labelData = labelData;
        this.valueData = valueData;
    }

    public String getLabelData() {
        return labelData;
    }

    public void setLabelData(String labelData) {
        this.labelData = labelData;
    }

    public int getValueData() {
        return valueData;
    }

    public void setValueData(int valueData) {
        this.valueData = valueData;
    }

    @Override
    public String toString() {
        return "ChartData{" +
                "labelData='" + labelData + '\'' +
                ", valueData=" + valueData +
                '}';
    }
}
