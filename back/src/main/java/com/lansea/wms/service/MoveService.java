package com.lansea.wms.service;


import com.lansea.wms.form.DeleteIdsForm;
import com.lansea.wms.mapper.InventoryMapper;
import com.lansea.wms.mapper.MoveMapper;
import com.lansea.wms.model.Inventory;
import com.lansea.wms.model.Move;
import com.lansea.wms.service.base.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MoveService extends BaseService {

    @Autowired
    MoveMapper moveMapper;

    @Autowired
    InventoryMapper inventoryMapper;

    @Autowired
    InventoryService inventoryService;

    /**
     * 新增 出入库信息
     * 判断出入库仓位中同样的产品是否存在
     * 存在则使用已存在的库存信息
     * 不存在这插入新的库存信息
     *
     * @param move 出入库信息
     */
    @Transactional(rollbackFor = Exception.class)
    public Move insertMove(Move move) {
        Inventory inventory = inventoryService.saveInventoryByMove(move);
        move.setCreateUidToLoginUser(userService);
        move.setInventoryId(inventory.getId());
        moveMapper.insert(move);
        return move;
    }

    /**
     * 根据 ids 删除出入库信息
     *
     * @param form ids模型
     * @return
     */
    public Integer deleteByIds(DeleteIdsForm form) {
        return moveMapper.delete(form.getIds());
    }

    /**
     * 修改出入库信息
     *
     * @param move 出入库信息
     * @return
     */
    @Transactional(rollbackFor = Exception.class)
    public Move updateMove(Move move) {
        Inventory inventory = inventoryService.saveInventoryByMove(move);
        move.setUpdateUidToLoginUser(userService);
        move.setInventoryId(inventory.getId());
        moveMapper.update(move);
        return move;
    }


}
