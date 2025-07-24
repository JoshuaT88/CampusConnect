import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/db';

class Ticket extends Model {
  public TicketID!: number;
  public TenantID!: number;
  public CampusID!: number;
  public DeptID!: number;
  public Status!: string;
  public Subject!: string;
  public Description!: string;
  public CreatedBy!: string;
  public CreatedAt!: Date;
}

Ticket.init(
  {
    TicketID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    TenantID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CampusID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    DeptID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    CreatedBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Ticket',
    tableName: 'Tickets',
    timestamps: false,
  }
);

export default Ticket;