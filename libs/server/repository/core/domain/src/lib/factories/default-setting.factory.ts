import { RepositoryCommonSettingType } from '@pimp-my-pr/shared/domain';
import { MaxPendingPrSettingEntity } from '../entities/common-settings/max-pending-pr-setting.entity';
import { MaxTimePrWaitingSettingEntity } from '../entities/common-settings/max-time-pr-waiting-setting.entity';
import { MaxLinesToCheckSettingEntity } from '../entities/common-settings/max-lines-to-check-setting.entity';

export const defaultSettingFactory = (settingType: RepositoryCommonSettingType, userId: string) => {
  switch (settingType) {
    case 'maxPendingPR':
      return new MaxPendingPrSettingEntity(userId);
    case 'maxSumTimeForPR':
      return new MaxTimePrWaitingSettingEntity(userId);
    case 'maxTotalLines':
      return new MaxLinesToCheckSettingEntity(userId);
  }
  return null;
};
