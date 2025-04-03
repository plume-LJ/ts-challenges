function intersection(nums1, nums2) {
    var resSet = new Set(), nums1Set = new Set(nums1);
    for (var _i = 0, nums2_1 = nums2; _i < nums2_1.length; _i++) {
        var i = nums2_1[_i];
        if (nums1Set.has(i)) {
            resSet.add(i);
        }
    }
    return Array.from(resSet);
}
;
function intersection1(nums1, nums2) {
    return Array.from(new Set(nums1.filter(function (i) { return nums2.includes(i); })));
}
;
